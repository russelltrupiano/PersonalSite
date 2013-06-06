$(document).ready(function() {

	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var is_moz = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

	if (is_chrome || is_moz) {
		$(".nav_item, .acc_title,.content p, .content_cat p, #skills_table").css({"font-weight": "bold"});
	}
	if (is_moz) {
		$(".nav_item").css({"padding-left": "32px", "padding-right": "32px"});
	}
	else if (is_chrome) {
		$(".nav_item").css({"padding-left": "35px", "padding-right": "35px"});
	}
	else if (is_safari) {
		$(".nav_item").css({"padding-left": "39px", "padding-right": "39px"});
	}

	function resetAccordion() {
		$("#content_education, #content_work, #content_interests").accordion({
			collapsible: true,
			active: false,
			heightStyle: 'content',
			icons: false
		});
		$(".acc_title").addClass("notSelectedTitle");
	}

	var curPage = $("#content_home");
	$("#_home").addClass("selectedNav");
	var newPage;
	var alteredHeader = false;

	// $('#menu').effect("slide", 'slow');
	resetAccordion();
	curPage.fadeTo(1200, 1);

	$(".colorBox").colorbox({
		rel: 'viewer',
		height: "80%"
	});

	$(".header_contents").mouseover(function() {
		if (!alteredHeader) {
			// $(".hidden").show();
			$(".hidden").css({"opacity":"1"});
			$(".comments a, .hidden").animate({"color":"#ff8300"}, 600);
			// "color":"#ff8300", 
			// , "opacity":".7"
			$(".no_comments").animate({"font-size":"+=20%"}, 400);
			alteredHeader = true;
		}
	});

	$(".nav_item").click(function (event) {
		newPage = $("#content"+event.target.id);
		if (curPage.attr("id") != newPage.attr("id")) {
			// if (event.target.id != "_resume") {
				if (event.target.id == "_resume") {
					$("#res_frame").attr("src", "docs/russelltrupiano.pdf");
					$("#res_frame").css({"display": "inline"});
				}
				curPage.hide();
				curPage = newPage;
				curPage.toggle('fade', 'easeInExpo', '1500');
				resetAccordion();
				$(".nav_item").removeClass("selectedNav");
				$("#"+event.target.id).addClass("selectedNav");
			// }
			// else { open("docs/russelltrupiano.pdf");}
		}
	});

	$(".acc_title").click(function(event) {
		if ($("#"+event.target.id).hasClass("selectedTitle")) {
			$("#"+event.target.id).removeClass("selectedTitle");
			$("#"+event.target.id).addClass("notSelectedTitle");
		}
		else {
			$(".acc_title").removeClass("selectedTitle");
			$(".acc_title").addClass("notSelectedTitle");
			$("#"+event.target.id).removeClass("notSelectedTitle");
			$("#"+event.target.id).addClass("selectedTitle");
		}
	});

	// $("#photo_cont td img").mouseover(function() {
	// 	var photo = $(this);
	// 	photo.animate({"opacity": ".8"}, 400);
	// 	photo.mouseout(function() {
	// 		photo.animate({"opacity": "1"}, 200);
	// 	});
	// });


});