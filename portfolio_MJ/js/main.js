
$(function() {
    'use strict';
    scrollMenu();
    smoothScroll();
});

$(window).scroll(function() {
    scrollMenu();
});

function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function(){
		$('body').animate( { scrollTop: $(this.hash).offset().top - 50 }, 800 );
	});
}


function scrollMenu() {
    var menuHeight = $('#main-nav').height();
    var scrolled = $(window).scrollTop();
    
    if(scrolled >= menuHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}