$("document").ready(function($){
    
    var nav = $('.navbar.navbar-inverse.navbar-fixed-top');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() < 1 ) {
            nav.addClass("scrolling");
        } else if($(this).scrollTop() >= 460){
            nav.removeClass("scrolling");
        }
    });
 
});