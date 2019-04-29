(function($) {
    "use strict";
    var win = $(window);

    win.on("load", function() {

        /***************************
         *  Features-carousel  *
         ***************************/
        var owl = $(".features-carousel-sec .owl-carousel");
        if (owl.length > 0) {
            owl.owlCarousel({
                items: 1,
                navText: ['<i class="fa fa-chevron-circle-right" ></i>', '<i class="fa fa-chevron-circle-right" ></i>'],
                navigation: true,
                controls: true,                
                autoplayTimeout: 4000,
				loop: true,
				autoplay: true
            });
        }
    });

})(jQuery);