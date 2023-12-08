(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});

		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 0) {
				$(".header-area").addClass("header");

			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// slider area
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:false,
			stagePadding: 40,
			autoplayTimeout:8000,
			navText : ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1,
					stagePadding:10,
				},
				600:{
					items:2,
					stagePadding: 20,
				},
				1000:{
					items:3
				}
			}
		})

		// menu toggle
		jQuery('.menu-btn-3').click(function(){
			$(".menu-area").slideToggle();
		});
		
		// lightbox
	lightbox.option({
	'alwaysShowNavOnTouchDevices': false,
	'resizeDuration': 200,
	'wrapAround': false,
	'albumLabel'  : '"Image %1 of %2"',
	'disableScrolling'  : false,
	'fadeDuration'  : 500,
	'fitImagesInViewport'  : true,
	'maxWidth'  : '' ,
	'maxHeight'  : '',
	'positionFromTop'  : 80,
	'resizeDuration'  : 500,
	'showImageNumberLabel': '',
	'wrapAround' : false,
	
	})
		
		
		
		
		
		
		
	});
})(jQuery);


// hamburger
function menuBtnFunction(menuBtn) {
	menuBtn.classList.toggle("active");
}	
