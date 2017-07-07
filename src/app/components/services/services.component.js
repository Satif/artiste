(function () {
  'use strict';

  angular
    .module('app.components')
    .component('services', services());

  /** @ngInject */
  function services() {
    var component = {
      controller: servicesController,
      controllerAs: 'servicesCtrl',
      templateUrl: 'app/components/services/services.component.html',
      bindings: {
        servicesData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function servicesController($timeout) {
    var vm = this;

    $timeout(function(){
      // Promo Section
      var owlPromo = $("#owl-promo");
      owlPromo.owlCarousel({
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true
      });

      // Blog Gallery Post
      var owlBlog = $("#owl-blog");
      owlBlog.owlCarousel({
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        itemsCustom: [
          [0, 1],
          [450, 1],
          [1200, 2]
        ]
      });

      var owlRelated = $("#owl-related-works");
      owlRelated.owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: false
      });

      // Custom Navigation Events
      $(".next").on('click', function () {
        owlPromo.trigger('owl.next');
        owlBlog.trigger('owl.next');
        owlRelated.trigger('owl.next');
      });
      $(".prev").on('click', function () {
        owlPromo.trigger('owl.prev');
        owlBlog.trigger('owl.prev');
        owlRelated.trigger('owl.prev');
      });
    }, 0);
  }
})();
