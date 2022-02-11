(function ($) {
    jQuery('.menus').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.header-area'
    });
 
    //data-background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
    //slick-slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots:false,
        centerMode: true,
        focusOnSelect:true,
        arrows:false,
        centerPadding:'0px',
    });
    
    	
  

})(jQuery);
