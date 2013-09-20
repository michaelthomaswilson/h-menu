var aColumns = [0];
var maxDepth = 4;
var columnHTML = '<ul id="new" class="large-4 data-list multi"> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li class="loadmore"> <a> <p>Load 20 more</p> </a> </li> </ul>'; 

function init() {
	$("body").on("click", "ul.multi li a", function(){
		processSelections($(this));
		processColumns($(this));
		revealControls();
	});

	$("body").on("click", ".cancel", function(){
		$(".copyNotice").remove();
		$("ul.multi li a.copyHover").off("click");
		$("ul.multi li a.copyHover").removeClass("copyHover");
		resetState();
	});

	$("body").on("click", "ul#flat li a", function(){
		processSelections($(this));
		showHierarchy();
	});

	$("#copyButton, #moveButton").click(function(el){
		setCopyMode($(this).data("action"));
	});

	$("#search").click(function(){
		toggleModes();
		hideControls();
	});

	$('#restore').click(function(){
		toggleModes();
	});

	$('.closeModal').click(function(){
		$('#deactivateModal').foundation('reveal', 'close');
	});
}

function setCopyMode(act) {
	// get currently selected element
	// attach .copyState style to it'
	var action = act;
	var copyNotice = '<div class="copyNotice"> <p><strong> ' + action + ' </strong><br> click a new location<br><div class="cancel">cancel</div></p></div>';
	var copySuccess = '<div class="copyNotice"> <h1>√</h1> <p>Successful</p></div>';

	$(".open").addClass('copyState');
	$(".copyState").before(copyNotice);

	// add copy hover state to all elements

	$("ul.multi li a").not(".copyState").addClass("copyHover");


	$("ul.multi li a.copyHover").not(".copyState").click(function(){
		$(".copyNotice").remove();

		var that = $(this);
		
		setTimeout(function(){
			that.before(copySuccess);
		},400);

		setTimeout(removeSuccess, 2000);

		that.off("click");
	});
}

function removeSuccess() {
	$(".copyNotice").fadeOut("fast", function(){
		$(this).remove();
	});
}

function toggleModes() {
	$('#flatWrapper').toggle();
	$('#columnWrapper').toggle();
	$('.paginationArea').toggle();
}

function revealControls() {
	$(".contextual").fadeIn(300);
}

function hideControls() {
	$(".contextual").hide();
}

function showHierarchy() {
	$('#hierarchy').fadeIn(300);
}

// Columns

function processColumns(el) {
	var id = Number(getColumnNumber(el)) + 1;

	console.log('column: ' + id);

	// do i need to remove columns due to a selection in an preceeding column?
	if (numberOfColumns() > 2) {
		resetColumns(el);
	}

	// should i add another column?
	console.log('# of columns: ' + numberOfColumns());

	if (numberOfColumns() < maxDepth && numberOfColumns() <= id) {
		addColumn(el);
		console.log('add column');
	}
}

function addColumn(el) {
	var el = '#' + getParent(el);

	console.log('id: ' + el);

	$(el).after(columnHTML);
	$('#new').attr("id",'column' + aColumns.length);

	scrollToEnd();
}

function resetColumns(el) {
	var id = Number(getColumnNumber(el));
	console.log('id clicked: ' + id);


	if (id < numberOfColumns()) {
		id = id + 1;
		for(var i=id; i < numberOfColumns(); i++) {
			var element = 'ul#column' + i; 
			console.log('removing element: ' + element);
			$(element).remove();
		}
	}
}

// Elements

function processSelections(el) {
	if ($(el).hasClass('selected')) {
		$(el).toggleClass('open');
	} else {
		clearAllSelections(el);
		setAsSelected(el);
	}
	resetParent(el);
	resetChildren(el);
	resetState();
}

function clearAllSelections(el) {
	var parent = '#' + getParent(el) + ' li a.selected';
	$(parent).removeClass('selected open');
}

function resetChildren(el) {
	var id = getColumnNumber(el);
	//console.log('id clicked: ' + id);


	if (id < numberOfColumns()) {
		id++;
		for(var i=id; i < numberOfColumns(); i++) {
			var element = '#column' + i + ' li a.selected'; 
			//console.log('reset element: ' + element);
			$(element).removeClass('open selected');
		}
	}
}

function resetParent(el) {
	var id = getColumnNumber(el);

	if (id > 0) {
		id--;
		var element = '#column' + id + ' li a.selected';
		$(element).removeClass('open');
	}
}

function resetState() {
	$(".copyState").removeClass('copyState');
	$(".copyHover").removeClass('copyHover');
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

function numberOfColumns() {
	aColumns = $('ul.data-list.multi');
	return aColumns.length;
}

// scroll functions

function scrollToEnd() {
	$('#holder').scrollTo('max', 500);
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


