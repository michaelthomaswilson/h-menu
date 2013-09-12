function init() {
	$('li a').click(function(){
		processSelections($(this));
	});

	$('#columnOne > li a').click(function(){
		initNextColumn($(this));
	});
}

function processSelections(el) {
	clearAllSelections(el);
	setAsSelected(el);
}

function clearAllSelections(el) {
	var parent = '#' + getParent(el) + ' li a.selected';
	$(parent).removeClass('selected');
}

function setAsSelected(el) {
	$(el).addClass('selected');


}

function initNextColumn(el) {
	var id = getParent(el);

	switch(id)
	{
	case 'columnOne':
	  showColumnTwo()
	  break;
	case 'columnTwo':
	  showColumnThree
	  break;
	default:
		console.log('Something is fucked');
	}
}

function showColumnTwo() {
	$('#columnTwo').toggle();
}

function getParent(el) {
	var parent = $(el).closest("ul").attr("id");
	return parent;
}









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

function setSelected(el) {
	console.log('setSelected');
	$(el).addClass('selected');
	el.selected = true;
}

function showColumn() {
	$('#columnTwo').toggle();
}