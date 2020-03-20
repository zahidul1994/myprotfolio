(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        $('.project_img').mouseenter(function(){
            $('.overlay_add').addClass('overlay');
            $('.demo-btn').show();
        });
        $('.project_img').mouseleave(function(){
            $('.overlay_add').removeClass('overlay');
            $('.demo-btn').hide();
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function () {
            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });




    });

})(jQuery);

//