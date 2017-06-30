(function () {
  'use strict';

  angular
    .module('app.components')
    .component('slider', slider());

  /** @ngInject */
  function slider() {
    var component = {
      controller: sliderController,
      controllerAs: 'sliderCtrl',
      templateUrl: 'app/components/slider/slider.component.html',
      bindings: {
        sliderData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function sliderController($timeout) {
    var vm = this;

    $timeout(function(){
      // Vimeo bg
      $('#slider3').revolution({
        sliderLayout: "fullscreen",
        delay: 12000,
        responsiveLevels: [4096, 1024, 778, 420],
        gridwidth: [1200, 1024, 700, 420],
        gridheight: [720, 720, 600, 600],

        hideThumbs: 10,

        navigation: {
          onHoverStop: "off",

          touch: {
            touchenabled: "false",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
          arrows: {enable: false},
          bullets: {enable: false},
        },

        parallax: {
          type: "scroll",
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
          origo: "enterpoint",
          speed: 400,
          bgparallax: "on",
          disable_onmobile: "on"
        },

        spinner: "spinner4",
        stopLoop: "off",
        stopAfterLoops: 0
      });
    }, 0);
  }
})();
