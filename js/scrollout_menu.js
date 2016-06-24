$(document).ready(function () {
	var $links = $('.scrollout_menu'),
			$first = $links.find('li:first-child'),
			$last = $links.find('li:last-child'),
			speed = 1000;

	$first.css('width', '0').css('opacity', '0');
	var w = $links.width();
	
	w *= -1;
	var wa = (w + 60);
	$links.css('left', wa);

	//click the right icon
	$last.click(function () {
		$(this).parent().animate({
			left: '0'
		}, speed);

		$first.animate({
			opacity: '1',
			width: '47px'
		}, speed);

		$last.animate({
			opacity: '0',
			width: '0'
		}, speed);
	});

	//Click the left icon
	$first.click(function () {
		$(this).parent().animate({
			left: wa
		}, speed);

		$last.animate({
			opacity: '1',
			width: '47px'
		}, speed);

		$first.animate({
			opacity: '0',
			width: '0'
		}, speed);
	});

});