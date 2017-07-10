(function () {
  'use strict';

  angular
    .module('app.components')
    .component('works', works());

  /** @ngInject */
  function works() {
    var component = {
      controller: worksController,
      controllerAs: 'worksCtrl',
      templateUrl: 'app/components/works/works.component.html',
      bindings: {
        worksData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function worksController($timeout) {
    var vm = this;

    $timeout(function(){
      /* Portfolio
       -------------------------------------------------------*/
      var $container = $('.works-grid');
      $container.imagesLoaded(function () {
        $container.isotope({
          itemSelector: '.work-item',
          layoutMode: 'fitRows',
          percentPosition: true,
          masonry: {columnWidth: '.work-img'}
        });
      });

      /* Masonry
       -------------------------------------------------------*/

      initMasonry();

      function initMasonry() {
        var $masonry = $('.masonry-grid');
        $masonry.imagesLoaded(function () {
          $masonry.isotope({
            itemSelector: '.work-item',
            layoutMode: 'masonry',
            percentPosition: true,
            resizable: false,
            isResizeBound: false,
            masonry: {columnWidth: '.work-item.quarter'}
          });
        });

        $masonry.isotope();
      }

      /* Lightbox popup
       -------------------------------------------------------*/

      $('.lightbox-gallery').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          titleSrc: 'title',
          verticalFit: true
        }
      });


      $(".lightbox-video").magnificPopup();

      /* Isotope Filter
       -------------------------------------------------------*/
      $('.portfolio-filter').on('click', 'a', function (e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter: filterValue});

        $('.portfolio-filter a').removeClass('active');
        $(this).closest('a').addClass('active');

      });
    }, 0);
  }
})();
