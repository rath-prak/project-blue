$(document).ready(function(){

	// setting photographySection tween
	var photo = $('#photo'),
		photoText = $('#photoText');

	// tl.set(photo, {autoAlpha: 0})
	var photographySection = TweenMax.to(photo, 2, {
		y: '50px'
	})

	var controller = new ScrollMagic.Controller();

	slide02Scene = new ScrollMagic.Scene({
		triggerElement: '#slide02',
		triggerHook: .3,
		duration: '50%'
	})
	.setTween(photographySection)
	.addIndicators()
	.addTo(controller);


}); // end of document.ready
