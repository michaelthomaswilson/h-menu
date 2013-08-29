function scrollToTop(el) {
	var nTop = $(el).offset().top; //$(el).scrollTop();

	if (nTop > 0) {
		$('ul.data-list').scrollTo(nTop, 500);
	}

	/*
	$('ul.data-list').animate({
		scrollTop: 0
		}, 1000);

	*/
	console.log("top = " + nTop);
}