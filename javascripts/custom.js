var aColumns = [];

function init() {

	initColumnArray();

	$('li a').click(function(){
		processSelections($(this));
	});

	$('#columnOne > li a').click(function(){
		initNextColumn($(this));
	});
}

// Columns

function initColumnArray() {
	aColumns.push($('#column1'));
	console.log("array: " + aColumns.length);
}

function initNextColumn(el) {
	var id = getParent(el);

}

// Elements

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

// Helpers

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