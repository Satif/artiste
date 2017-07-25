(function ($) {
  "use strict";

  angular.element(document).ready(function () {
    setTimeout(function(){
        // Preloader
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');

        $(window).trigger("resize");
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

  // Wow Animations
  var wow = new WOW({
    offset: 50,
    mobile: false
  });

  wow.init();


  /* FitVIds
   -------------------------------------------------------*/
  $(".video-wrap").fitVids();

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
