$(document).ready(function(){

	// variables
	var controller;

	var getTriggerDown = $('.slide-pos'),
		triggersDown = [],
		getTriggerUp = $('.slide-pos-reverse'),
		triggersUp = [];

	// triggers on the way down	
	$.each(getTriggerDown, function(key, value){
		var id = '#'+value.id;
		triggersDown.push(id);

		// console.log(triggersDown[key]);
	});

	// triggers on the way up	
	$.each(getTriggerUp, function(key, value){
		var id = '#'+value.id;
		triggersUp.push(id);

		// console.log(triggersUp[key]);
	});



	// init ScrollMagic Controller
	controller = new ScrollMagic.Controller();

	// scene 1 - pin out main section
	var pinScene01 =  new ScrollMagic.Scene({
		triggerElement: '.main-wrapper',
		triggerHook: 0,
		duration: '900%'
	})
	.setPin('.main-wrapper .pin-wrapper', {pushFollowers: false})
	.addTo(controller);

	// scene 2



	// scene 3 - trigger the right animation on the way Down
	triggersDown.forEach(function(triggerDown, index){
		var triggerTransitionToNext = new ScrollMagic.Scene({
			triggerElement: triggerDown,
			triggerHook: 0.6
		})
		.on('enter', function(e){
			// console.log('animation to next' , triggerDown);
		})
		.addIndicators({
			name: 'triggerDown', 
			indent: 500,
			colorStart: 'yellow',
			colorTrigger: 'yellow'
		})
		.addTo(controller);

	});


// scene 4 - trigger the right animation on the way up
	triggersUp.forEach(function(triggerUp, index){
		var triggerTransitionToPrev = new ScrollMagic.Scene({
			triggerElement: triggerUp,
			triggerHook: 0.49
		})
		.on('leave', function(e){
			// console.log('animation to next' , triggerUp);
		})
		// .addIndicators({
		// 	name: 'triggerUp', 
		// 	indent: 110,
		// 	colorStart: 'black',
		// 	colorTrigger: 'black'
		// })
		.addTo(controller);

	});





}); // end of document.ready
