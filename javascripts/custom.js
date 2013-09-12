var aColumns = [];
var columnHTML = '<ul id="column1" class="large-4 columns data-list"> <li> <a> <p class="title">How long of a title can this hold, you ask?</p> <p class="description">Secondary, single-line info here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> </ul> ';
function init() {

	initColumnArray();

	$('li a').click(function(){
		processSelections($(this));
		initNextColumn($(this));
	});
}

// Columns

function initColumnArray() {
	aColumns.push($('#column1'));
}

function initNextColumn(el) {
	var id = getParent(el);

}

// Elements

function processSelections(el) {
	if ($(el).hasClass('selected')) {
		$(el).toggleClass('open');
	} else {
		clearAllSelections(el);
		setAsSelected(el);
	}
}

function clearAllSelections(el) {
	var parent = '#' + getParent(el) + ' li a.selected';
	$(parent).removeClass('selected open');
}

function setAsSelected(el) {
	$(el).addClass('selected open');
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


