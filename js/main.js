$(document).ready(function(){

	// ScrollMagic code will go here
	var slide00 = $('#slide00');
	var slide01 = $('#slide01');


	TweenMax.to(slide00, 2, {autoAlpha: 0})
	TweenMax.to(slide01, 2, {autoAlpha: 1})

});
