var aColumns = [0];
var columnHTML = '<ul id="new" class="large-4 columns data-list"> <li> <a> <p class="title">How long of a title can this hold, you ask?</p> <p class="description">Secondary, single-line info here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> </a> </li> </ul> ';
function init() {

	$("body").on("click", "li a", function(){
		processSelections($(this));
		initNextColumn($(this));
	});
}

// Columns

function initNextColumn(el) {
	console.log('columnNumber: ' + getColumnNumber(el));
	var id = getColumnNumber(el);
	var parent = '#' + getParent(el);
	console.log(parent);

	if (aColumns.length == 1) {
		addColumn(parent);
	}
}

function addColumn(el) {
	$(el).after(columnHTML);
	$('#new').attr("id",'column' + aColumns.length);
	aColumns.push(aColumns.length);
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

function getColumnNumber(el) {
	var parent = getParent(el);
	var number = parent.substr(parent.length - 1);
	return number;
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


