(function () {
  'use strict';

  angular
    .module('app.components')
    .component('blogs', blogs());

  /** @ngInject */
  function blogs() {
    var component = {
      controller: blogsController,
      controllerAs: 'blogsCtrl',
      templateUrl: 'app/components/blogs/blogs.component.html',
      bindings: {
        blogsData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function blogsController($timeout) {
    var vm = this;

    $timeout(function(){
      /* Owl Carousel
       -------------------------------------------------------*/
      initOwlCarousel();

      function initOwlCarousel() {

        // Owl Hero Slider
        $("#owl-slider-one-img").owlCarousel({
          transitionStyle: "fadeUp",
          autoHeight: true,
          navigation: true,
          slideSpeed: 300,
          singleItem: true,
          navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
      }
    }, 0);
  }
})();
