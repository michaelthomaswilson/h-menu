function scrollToTop(el) {

	if ($(el).hasClass('selected')) {
		resetElements();
	} else {
		resetElements();
		setSelected(el);
	}

	var nScroll = $(el).offset().top - $('.data-list').offset().top + $('.data-list').scrollTop();

	
	$('.data-list').scrollTo(nScroll, 500);

	showColumn();
}

function resetElements() {
	$('li a.selected').removeClass('selected');

}

function setSelected(el) {
	console.log('setSelected');
	$(el).addClass('selected');
	el.selected = true;
}

function showColumn() {
	$('#column2').show();
}