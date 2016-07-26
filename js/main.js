$(document).ready(function(){

	// ScrollMagic code will go here
	var slide00 = $('#slide00');
	var slide01 = $('#slide01');
	var logo = $('#logo');

	tl = new TimelineMax();

	tl.to(slide00, 2, {autoAlpha: 0})
		.to(slide01, 2, {autoAlpha: 1})
		.fromTo(logo, 1, {css: {scale: 0}}, {css: {scale: 3}, ease: Bounce.easeOut }, '-=1')






});
