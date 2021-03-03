(function ($) {
    'use strict';

    var uza_window = $(window);


    $('.switch-lang input').on('change', function(){
      var dad = $(this).parent();
      if($(this).is(':checked'))
        dad.addClass('switch-lang-checked');
      else
        dad.removeClass('switch-lang-checked');
    });
    

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************

    uza_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#uzaNav').classyNav();
    }


    // *************************************
    // :: 5.0 Testimonial Slides Active Code
    // *************************************
    if ($.fn.owlCarousel) {
        var testimonialSlide = $('.testimonial-slides');
        testimonialSlide.owlCarousel({
            items: 1,
            margin: 2,
            dots: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 1500,
            nav: true,
            navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>']                      
        });
    }

    // *********************************
    // :: 8.0 Portfolio Menu Active Code
    // *********************************
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })


    // ***************************
    // :: 10.0 Tooltip Active Code
    // ***************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 11.0 WOW Active Code
    // ***********************
    if (uza_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 12.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // ****************************
    // :: 13.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        uza_window.scrollUp({
            scrollSpeed: 2000,
            scrollText: '<i class="fa fa-angle-up"</i>'
        });
    }

    // ********************************
    // :: 15.0 Slick Slider Active Code
    // ********************************
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 15,
            time: 1500
        });
    }

    // *********************************
    // :: 16.0 Prevent Default 'a' Click
    // *********************************
    


    // *********************************
    // :: More
    // *********************************
    $(function() {
        $(document).on('click', '#scrollUp', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 2000, 'easeInOutExpo');
            event.preventDefault();
        });

        $(document).on('click', '.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 2000, 'easeInOutExpo');
            event.preventDefault();
        });

    });

    $(function(){

        $(".has-megamenu").hover(
                function () {
                    $(".main-header-area").addClass("sticky-menu");
                    $('#logo').attr('src','img/logo-color.png');
                }, 
                function () {
                    $(".main-header-area").removeClass("sticky-menu");
                    $('#logo').attr('src','img/logo-white.png');
        });


         $(".active-a").hover(function() {
           $(".meg-a").toggleClass("mega-item").siblings().removeClass("mega-item");
        });

         $(".has-megamenu").hover(function() {
           $("#drop").toggleClass("arrow_carrot-up").siblings().removeClass("arrow_carrot-down");
           $("#drop").toggleClass("arrow_carrot-down").siblings().removeClass("arrow_carrot-up");
        });
         

     });

    $(function(){

      $("#card-1-sec").hover(
        function () {$('#img').attr('src','img/core-img/sec-1-a-blue.png');},function () {$('#img').attr('src','img/core-img/sec-1-a.png');});
      
      $("#card-2-sec").hover(
        function () {$('#img-2').attr('src','img/core-img/sec-1-b-blue.png');},function () {$('#img-2').attr('src','img/core-img/sec-1-b.png');});
      
      $("#card-3-sec").hover(
        function () {$('#img-3').attr('src','img/core-img/sec-1-c-blue.png');},function () {$('#img-3').attr('src','img/core-img/sec-1-c.png');});
      
      $("#card-4-sec").hover(
        function () {$('#img-4').attr('src','img/core-img/sec-1-d-blue.png');},function () {$('#img-4').attr('src','img/core-img/sec-1-d.png');});
        

     });

    $(function(){

      $("#card-1-sec-b").hover(
        function () {$('#img-b').attr('src','img/core-img/sec-4-a-blue.png');},function () {$('#img-b').attr('src','img/core-img/sec-4-a.png');});
      
      $("#card-2-sec-b").hover(
        function () {$('#img-b-2').attr('src','img/core-img/sec-4-b-blue.png');},function () {$('#img-b-2').attr('src','img/core-img/sec-4-b.png');});
      
      $("#card-3-sec-b").hover(
        function () {$('#img-b-3').attr('src','img/core-img/sec-4-c-blue.png');},function () {$('#img-b-3').attr('src','img/core-img/sec-4-c.png');});
      
      $("#card-4-sec-b").hover(
        function () {$('#img-b-4').attr('src','img/core-img/sec-4-d-blue.png');},function () {$('#img-b-4').attr('src','img/core-img/sec-4-d.png');});
        

     });

})(jQuery);

jQuery(document).ready(function () {
          jQuery(".card-deck .sl-a").hover(function () {

            jQuery('.card-deck .sl-a').removeClass("active")
            jQuery(this).addClass("active")

          });          
    });