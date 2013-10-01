//var aColumns = [0];
var maxDepth = 4;
var columnHTML = '<li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li> <a> <p class="title">Menu item</p> <p class="description">Description goes here.</p> <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ipsum eu orci hendrerit iaculis vel non quam. Aenean sed vestibulum magna, eu dictum turpis. Ut eget mi ante. Aliquam eu ante a leo vestibulum accumsan a sit amet lectus. Fusce vel porttitor arcu, sed mattis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan facilisis vulputate. Cras accumsan laoreet arcu, sit amet posuere erat fringilla in. Etiam quis rhoncus tellus, eget auctor erat.</p> </a> </li> <li class="loadmore"> <a> <p>Load 20 more</p> </a> </li> </ul>';
var column1 = '<ul id="column1" class="large-4 data-list multi"> <li> <input type="checkbox"> <a> <p class="title">Canada</p> <p class="description">20 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Mexico</p> <p class="description">20 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Saint Pierre and Miquelon</p> <p class="description">20 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">United States of America</p> <p class="description">20 items</p> <p class="info"></p> </a> </li> </ul>';
var column2 = '<ul id="column2" class="large-4 data-list multi"> <li> <input type="checkbox"> <a> <p class="title">Alabama</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Alaska</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Arizona</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Arkansas</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">California</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Colorado</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Connecticut</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Delaware</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Florida</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Georgia</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Hawaii</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Idaho</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Illinois</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Indiana</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Iowa</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Kansas</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Kentucky</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Louisiana</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Maine</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Maryland</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Massachusetts</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Michigan</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Minnesota</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Mississippi</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Missouri</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Montana</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Nebraska</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Nevada</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">New Hampshire</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">New Jersey</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">New Mexico</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">New York</p> <p class="description">4 items</p> <p class="info"></p> </a> </li> </ul>'; 
var column3 = '<ul id="column3" class="large-4 data-list multi"> <li> <input type="checkbox"> <a> <p class="title">Main Warehouse</p> <p class="description">The main warehouse in Denver</p> <p class="info">99 Broadway Street <br>Denver, CO 80220 <br>303.333.3333</p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Sales Center</p> <p class="description">Our main sales office for the Colorado Region.</p> <p class="info">99 Broadway Street <br>Denver, CO 80220 <br>303.333.3333</p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Admninistrative Office</p> <p class="description">The administrative offices for the corporate headquarters.</p> <p class="info">99 Broadway Street <br>Denver, CO 80220 <br>303.333.3333</p> </a> </li> <li> <input type="checkbox"> <a> <p class="title">Manufacturing</p> <p class="description">Our main factory for this region</p> <p class="info">99 Broadway Street <br>Denver, CO 80220 <br>303.333.3333</p> </a> </li> </ul>';

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
		revealControls();
	});

	$("#copyButton, #moveButton").click(function(el){
		setCopyMode($(this).data("action"));
	});

	$("#search, #restore, ul.show a").click(function(){
		toggleModes();
	});

	$('.closeModal').click(function(){
		$('#deactivateModal').foundation('reveal', 'close');
	});

	/*

	$('.data-list input[type="checkbox"]').click(function(){
		if ($(this).is(':checked')) {
			$(this).siblings('a').addClass('selected');
		} else {
			$(this).siblings('a').removeClass('selected');
		}
	});

	*/

	$("body").on("click", '.data-list input[type="checkbox"]', function(){
		$(this).siblings('a').toggleClass('checked');
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


	$("a.copyHover").not(".copyState").click(function(){
		$('a.copyHover').off();
		$(".copyNotice").remove();

		var that = $(this);
		
		setTimeout(function(){
			that.before(copySuccess);
		},400);

		setTimeout(removeSuccess, 2000);
	});
}

function removeSuccess() {
	$(".copyNotice").fadeOut("fast", function(){
		$(this).remove();
	});
	// remove copyHover class to fix this.
	$("ul.multi li a.copyHover").removeClass("copyHover");
}

function toggleModes() {
	$('#flatWrapper').toggle();
	$('#columnWrapper').toggle();
	$('.paginationArea').toggle();
	$('#showAsHierarchy').toggleClass('disabled');
	$('#showAsFlat').toggleClass('disabled');
}

function revealControls() {
	//$(".contextual").fadeIn(300);
	$('.contextual a.button').removeClass('disabled');
}

function hideControls() {
	$(".contextual").hide();
}

function showHierarchy() {
	$('#hierarchy').fadeIn(300);
}

// Columns

function processColumns(el) {
	var id = Number(getColumnNumber(el));

	console.log('processColumns: column: ' + id);

	// do i need to remove columns due to a selection in an preceeding column?
	if (numberOfColumns() > 1) {
		resetColumns(el);
	}

	// should i add another column?
	if (numberOfColumns() < maxDepth && numberOfColumns() <= (id+1)) {
		addColumn(el);
	}
}

function addColumn(el) {
	var el = '#' + getParent(el);
	var id = Number(getColumnNumber(el)) + 1;

	//console.log('addColumn, id: ' + id);

	var columnWrapper = '<ul id="column' + id + '" class="large-4 data-list multi">';
	var newColumn = "#column" + id;

	// new code to work with locations html
		switch(id)
		{
		case 1:
		  columnWrapper = column1;
		  break;
		case 2:
		  columnWrapper = column2;
		  break;
		case 3:
		  columnWrapper = column3;
		  break;
		}
	// end new code

	if ($(newColumn).length == 0) {
		var html = columnWrapper; // + columnHTML;
		$(el).after(html);
		scrollToEnd();
	} else {
		console.log(newColumn + " already exists!");
	}
}

function resetColumns(el) {
	var id = Number(getColumnNumber(el));
	//console.log('id clicked: ' + id);
	//console.log('# of columns: ' + numberOfColumns());


	if (id < numberOfColumns()) {
		id = id + 2;
		for(var i=id; i <= numberOfColumns(); i++) {
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
		console.log('no content');
		clearColumnSelections(el);
		setAsSelected(el);
	}
	resetParent(el);
	resetChildren(el);
	resetState();
}

function clearColumnSelections(el) {
	var parent = '#' + getParent(el) + ' li a.selected';
	console.log("clearing column: " + parent);
	$(parent).removeClass('selected open');
}

function resetChildren(el) {
	var id = getColumnNumber(el);

	if (id < numberOfColumns()) {
		id++;
		for(var i=id; i < numberOfColumns(); i++) {
			var element = '#column' + i + ' li a.selected'; 
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
	$(el).addClass('selected');
	if ($(el).children('p.info').text().length > 0) {
		$(el).addClass('open');
	}
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


