$(document).ready(function() {
	var stickyNavTop = $('.navbar').offset().top;

	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		     
		if (scrollTop > stickyNavTop) { 
		    $('.navbar').addClass('sticky');
		    $('.content').addClass('body-buffer');
		} else {
		    $('.navbar').removeClass('sticky'); 
		    $('.content').removeClass('body-buffer');
		}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});
});