$(document).ready(function() {

	function resetAccordion() {
		$("#content_education, #content_work, #content_interests").accordion({
			collapsible: true,
			active: false,
			heightStyle: 'content',
			icons: false
		});
	}

	var curPage = $("#content_home");
	$("#_home").addClass("selectedNav");
	var newPage;
	var alteredHeader = false;

	$('#menu').effect("slide", 'slow');
	resetAccordion();
	curPage.fadeTo(1200, 1);

	$(".colorBox").colorbox({
		rel: 'viewer',
		height: "80%"
	});

	$(".header_contents").mouseover(function() {
		if (!alteredHeader) {
			$(".hidden").css({"opacity":"1"});
			$(".comments a, .hidden").animate({"color":"#ff8300", "opacity":".7"}, 1000);
			$(".no_comments").animate({"font-size":"+=20%"}, 400);
			alteredHeader = true;
		}
	});

	$(".nav_item").click(function (event) {
		newPage = $("#content"+event.target.id);
		if (curPage.attr("id") != newPage.attr("id")) {
			if (event.target.id != "_resume") {
				curPage.hide();
				curPage = newPage;
				curPage.toggle('fade', 'easeInExpo', '1500');
				resetAccordion();
				$(".nav_item").removeClass("selectedNav");
				$("#"+event.target.id).addClass("selectedNav");
			}
			else { open("docs/russelltrupiano.pdf");}
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

});