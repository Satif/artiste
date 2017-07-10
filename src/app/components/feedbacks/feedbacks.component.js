(function () {
  'use strict';

  angular
    .module('app.components')
    .component('feedbacks', feedbacks());

  /** @ngInject */
  function feedbacks() {
    var component = {
      controller: feedbacksController,
      controllerAs: 'feedbacksCtrl',
      templateUrl: 'app/components/feedbacks/feedbacks.component.html',
      bindings: {
        feedbacksData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function feedbacksController($timeout) {
    var vm = this;

    $timeout(function(){
      // Feedbacks
      $("#owl-testimonials").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 4000,
        stopOnHover: true
      });

    }, 0);
  }
})();
