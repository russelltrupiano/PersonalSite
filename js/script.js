$(document).ready(function() {
	// FUNCTIONS
	function resetAccordion() {
		$("#content_education, #content_work, #content_interests").accordion({
			collapsible: true,
			heightStyle: 'content',
			autoHeight: false,
			icons: false
		});
		$(".acc_title").addClass("notSelectedTitle");
		$(".content_cat .acc_title:first-child").removeClass("notSelectedTitle");
		$(".content_cat .acc_title:first-child").addClass("selectedTitle");
	}

	function animateRank() {
		$(".score_bar div").effect("slide", 1000);
	}

	// SETUP
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var is_moz = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

	if (is_chrome || is_moz) {
		$(".nav_item, .acc_title,.content p, .content_cat p, #skills_table").css({"font-weight": "bold"});
	}

	var curPage = $("#content_home");
	$("#_home").addClass("selectedNav");
	var newPage;
	var alteredHeader = false;

	resetAccordion();
	curPage.fadeTo(1200, 1);

	$(".colorBox").colorbox({
		rel: 'viewer',
		maxHeight: "90%"
	});

	// THE REST
	$(".header_contents").mouseover(function() {
		if (!alteredHeader) {
			$(".hidden").css({"opacity":"1"});
			$(".comments a, .hidden").animate({"color":"#ff8300"}, 600);
			$(".no_comments").animate({"font-size":"+=20%"}, 400);
			alteredHeader = true;
		}
	});

	$(".nav_item").click(function (event) {
		newPage = $("#content"+event.target.id);
		if (curPage.attr("id") != newPage.attr("id")) {
				if (event.target.id == "_resume") {
					// prevents resume from downloading on page load
					$("#res_frame").attr("src", "docs/russelltrupiano.pdf");
					$("#res_frame").css({"display": "inline"});
				}
				else if (event.target.id == "_skills") {
					animateRank();
				}
				curPage.hide();
				curPage = newPage;
				curPage.toggle('fade', 'easeInExpo', '1500');
				$(".nav_item").removeClass("selectedNav");
				$("#"+event.target.id).addClass("selectedNav");
		}
	});

	$(".acc_title").click(function(event) {
		var allHeaders = $('.acc_title');
		allHeaders.each(function(){
			var header = $(this);
			if(header.hasClass('ui-accordion-header-active')) {
				header.removeClass('notSelectedTitle').addClass('selectedTitle');
			}
			else {
				header.removeClass('selectedTitle').addClass('notSelectedTitle');
			}
		})
	});
});