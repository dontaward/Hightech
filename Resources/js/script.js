
$(document).ready(function() {

	/* For sticky navigation */

	$('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	});

	/* Scroll on Buttons */

	$('.js--scroll-to-plans').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});

	$('.js--scroll-to-start').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});

	$('.js--scroll-to-home').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
	});

	/* Navigation scroll*/

	$(function() {
	  	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	/* Mobile Nav */

	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(200);
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});

	/* Maps */

	var map = new GMaps({
	  div: '.map',
	  lat: 17.766809,
	  lng: 83.2400933,
	  zoom: 7
	});

	map.addMarker({
	  lat: 17.766809,
	  lng: 83.2400933,
	  title: 'South Dakota',
	  infoWindow: {
		content: '<p>Our location</p>'
		}
	});

});