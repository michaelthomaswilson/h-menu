function scrollToTop(el) {
	clearColors();
	setColor(el);

	var nScroll = $(el).offset().top - $('.data-list').offset().top + $('.data-list').scrollTop();

	$('.data-list').scrollTo(nScroll, 500);
}

function clearColors() {
	$('li a').css("background-color","red");
}

function setColor(el) {
	$(el).css("background-color","blue");
}