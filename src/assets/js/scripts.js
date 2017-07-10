(function ($) {
  "use strict";

  angular.element(document).ready(function () {
    setTimeout(function(){
        // Preloader
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');

        $(window).trigger("resize");
        initOnepagenav();
    });
  }, 0);

  /* Full Height Container / Dropdowns
   -------------------------------------------------------*/

  $(window).resize(function () {

    container_full_height_init();

    var windowWidth = $(window).width();
    if (windowWidth <= 974) {
      $('.dropdown-toggle').attr('data-toggle', 'dropdown');
      $('.navigation').removeClass("sticky offset scrolling");
      $('.nav-type-4').find(".local-scroll-no-offset").removeClass('local-scroll-no-offset').addClass("local-scroll");
    }
    if (windowWidth > 974) {
      $('.dropdown-toggle').removeAttr('data-toggle', 'dropdown');
      $('.dropdown').removeClass('open');
      $('.nav-type-4').find(".local-scroll").removeClass('local-scroll').addClass("local-scroll-no-offset");
    }

    /* Mobile Menu Resize
     -------------------------------------------------------*/
    $(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height());

  });


  /* Sticky Navigation
   -------------------------------------------------------*/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50 && $('.navbar-toggle').is(":hidden")) {
      $('.navigation-overlay, .navigation').addClass("sticky");
      $('.logo-wrap').addClass("shrink");
      $('.nav-left .logo-wrap').removeClass("shrink");
    } else {
      $('.navigation-overlay, .navigation').removeClass("sticky");
      $('.logo-wrap').removeClass("shrink");
    }

    if ($(window).scrollTop() > 200 && $('.navbar-toggle').is(":hidden")) {
      $('.navigation').addClass("offset");
    } else {
      $('.navigation').removeClass("offset");
    }

    if ($(window).scrollTop() > 500 && $('.navbar-toggle').is(":hidden")) {
      $('.navigation').addClass("scrolling");
    } else {
      $('.navigation').removeClass("scrolling");
    }
  });




  /* Full screen Navigation
   -------------------------------------------------------*/
  $('#nav-icon, .overlay-menu').on("click", function () {
    $('#nav-icon').toggleClass('open');
    $('#overlay').toggleClass('open');
  });


  // Closes the Responsive Menu on Menu Item Click
  function initOnepagenav() {

    $('.navigation-overlay .navbar-collapse ul li a, .nav-type-4 .navbar-collapse ul li a').on('click', function () {
      $('.navbar-toggle:visible').click();
    });

    // Smooth Scroll Navigation
    $('.local-scroll').localScroll({offset: {top: -60}, duration: 1500, easing: 'easeInOutExpo'});
    $('.local-scroll-no-offset').localScroll({offset: {top: 0}, duration: 1500, easing: 'easeInOutExpo'});
  }


  /* Mobile Navigation
   -------------------------------------------------------*/
  $('.dropdown-toggle').on('click', function (e) {
    e.preventDefault();
  });


  /* IE Detect
   -------------------------------------------------------*/
  if (Function('/*@cc_on return document.documentMode===10@*/')()) {
    $("html").addClass("ie");
  }

  /* Mobile Detect
   -------------------------------------------------------*/
  if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
    $("html").addClass("mobile");
    $('.dropdown-toggle').attr('data-toggle', 'dropdown');
  }
  else {
    $("html").removeClass("mobile");
  }

  // Detect touch devices    
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
  }


  /* Text Rotator
  //  -------------------------------------------------------*/
  // function initTextrotator() {
  //
  //   $(".rotate").textrotator({
  //     animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  //     separator: ",",
  //     speed: 3000
  //   });
  //
  // }


  // angular.element(document).ready(function () {
  //   setTimeout(function(){
  //     /* Lightbox popup
  //      -------------------------------------------------------*/
  //
  //     $('.lightbox-gallery').magnificPopup({
  //       type: 'image',
  //       tLoading: 'Loading image #%curr%...',
  //       gallery: {
  //         enabled: true,
  //         navigateByImgClick: true,
  //         preload: [0, 1]
  //       },
  //       image: {
  //         titleSrc: 'title',
  //         verticalFit: true
  //       }
  //     });
  //
  //
  //     $(".lightbox-video").magnificPopup();
  //
  //
  //     /* Isotope Filter
  //      -------------------------------------------------------*/
  //     $('.portfolio-filter').on('click', 'a', function (e) {
  //       e.preventDefault();
  //       var filterValue = $(this).attr('data-filter');
  //       $container.isotope({filter: filterValue});
  //
  //       $('.portfolio-filter a').removeClass('active');
  //       $(this).closest('a').addClass('active');
  //
  //     });
  //   }, 100);
  // });

  // /* Masonry
  //  -------------------------------------------------------*/
  //
  // function initMasonry() {
  //
  //   var $masonry = $('.masonry-grid');
  //   $masonry.imagesLoaded(function () {
  //     $masonry.isotope({
  //       itemSelector: '.work-item',
  //       layoutMode: 'masonry',
  //       percentPosition: true,
  //       resizable: false,
  //       isResizeBound: false,
  //       masonry: {columnWidth: '.work-item.quarter'}
  //     });
  //
  //   });
  //
  //   $masonry.isotope();
  // }


  // angular.element(document).ready(function () {
  //   setTimeout(function(){
  //     /* Progress Bars
  //      -------------------------------------------------------*/
  //     // var $section = $('#animated-skills').appear(function () {
  //     //
  //     //   function loadDaBars() {
  //     //     var bar = $('.progress-bar');
  //     //     var bar_width = $(this);
  //     //     $(function () {
  //     //       $(bar).each(function () {
  //     //         bar_width = $(this).attr('aria-valuenow');
  //     //         $(this).width(bar_width + '%');
  //     //       });
  //     //     });
  //     //   }
  //     //
  //     //   loadDaBars();
  //     // });
  //
  //
  //     /* Accordion
  //      -------------------------------------------------------*/
  //     var allPanels = $(".accordion > .panel-content").hide();
  //     allPanels.first().slideDown("easeOutExpo");
  //     $(".accordion > .acc-panel > a").first().addClass("active");
  //
  //     $(".accordion > .acc-panel > a").on('click', function () {
  //
  //       var current = $(this).parent().next(".panel-content");
  //       $(".accordion > .acc-panel > a").removeClass("active");
  //       $(this).addClass("active");
  //       allPanels.not(current).slideUp("easeInExpo");
  //       $(this).parent().next().slideDown("easeOutExpo");
  //
  //       return false;
  //
  //     });
  //   }, 100);
  // });

  /* Pie Charts
   -------------------------------------------------------*/
  // function initPiechart() {
  //   $('.chart').appear(function () {
  //
  //     $('.chart').easyPieChart({
  //
  //       animate: {
  //         duration: 1500,
  //         enabled: true
  //       },
  //       scaleColor: false,
  //       trackColor: '#f2f2f2',
  //       lineWidth: 10,
  //       size: 174,
  //       lineCap: 'square',
  //
  //       onStep: function (from, to, percent) {
  //         $(this.el).find('.percent').text(Math.round(percent));
  //       }
  //     });
  //     var chart = window.chart = $('.chart').data('easyPieChart');
  //     $('.js_update').on('click', function () {
  //       chart.update(Math.random() * 200 - 100);
  //     });
  //   });
  // }


  // angular.element(document).ready(function () {
  //   setTimeout(function(){
  //     /* Flexslider / Masonry
  //      -------------------------------------------------------*/
  //
  //     $('#one-img-slide').flexslider({
  //       animation: "slide",
  //       directionNav: true,
  //       touch: true,
  //       slideshow: false,
  //       prevText: ["<i class='fa fa-angle-left'></i>"],
  //       nextText: ["<i class='fa fa-angle-right'></i>"],
  //       start: function () {
  //         var $container = $('.masonry');
  //         $container.imagesLoaded(function () {
  //           $container.isotope({
  //             itemSelector: '.masonry-item',
  //             layoutMode: 'masonry'
  //           });
  //         });
  //       }
  //     });
  //   }, 100);
  // });

  // Wow Animations
  var wow = new WOW({
    offset: 50,
    mobile: false
  });

  wow.init();


  /* FitVIds
   -------------------------------------------------------*/
  $(".video-wrap").fitVids();


  /* ---------------------------------------------------------------------- */
  /*  Contact Form
   /* ---------------------------------------------------------------------- */

  var submitContact = $('#submit-message'),
    message = $('#msg');

  submitContact.on('click', function (e) {
    e.preventDefault();

    var $this = $(this);

    $.ajax({
      type: "POST",
      url: 'contact.php',
      dataType: 'json',
      cache: false,
      data: $('#contact-form').serialize(),
      success: function (data) {

        if (data.info !== 'error') {
          $this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
          message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        } else {
          message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        }
      }
    });
  });

  /* ---------------------------------------------------------------------- */
  /*  Index map
   /* ---------------------------------------------------------------------- */

  // var gmapDiv = $("#google-map");
  //   var gmapMarker = gmapDiv.attr("data-address");
  //
  //   gmapDiv.gmap3({
  //     zoom: 16,
  //     address: gmapMarker,
  //     oomControl: true,
  //     navigationControl: true,
  //     scrollwheel: false,
  //     styles: [
  //       {
  //       "featureType":"all",
  //       "elementType":"all",
  //         "stylers":[
  //           { "saturation":"-70" }
  //         ]
  //     }]
  //   })
  //   .marker({
  //     address: gmapMarker,
  //     icon: directory_uri.theme_directory_uri + "/assets/img/map_pin.png"
  //   })
  //   .infowindow({
  //     content: "V Tytana St, Manila, Philippines"
  //   })
  //   .then(function (infowindow) {
  //     var map = this.get(0);
  //     var marker = this.get(1);
  //     marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //     });
  //   });


  /* Scroll to Top
   -------------------------------------------------------*/

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("#back-to-top").addClass("show");
    } else {
      $("#back-to-top").removeClass("show");
    }
  });

  $('a[href="#top"]').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 'slow');
    return false;
  });

})(jQuery);


(function () {
  "use strict";

  var docElem = document.documentElement,
    didScroll = false,
    changeHeaderOn = 550;
  document.querySelector('#back-to-top');
  function init() {
    window.addEventListener('scroll', function () {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 50);
      }
    }, false);
  }

})();


/* Full Height Container
 -------------------------------------------------------*/

function container_full_height_init() {
  (function ($) {
    $(".container-full-height").height($(window).height());
  })(jQuery);
}
