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

      $timeout(function() {
        initMasonry();
      }, 100);

      function initMasonry() {
        var $masonry = $('.mas-grid');
        var $grid = $masonry.isotope({
          itemSelector: '.work-item',
          layoutMode: 'fitRows',
          percentPosition: true,
          resizable: false,
          isResizeBound: false,
          masonry: {columnWidth: '.work-item.quarter'}
        });

        $('.btn-group').on( 'click', 'button', function() {
          var filterValue = $( this ).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });

        $('.btn-group').each( function( i, buttonGroup ) {
          var $buttonGroup = $( buttonGroup );
          $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.active').removeClass('active');
            $( this ).addClass('active');
          });
        });
      }

      /* Lightbox popup
       -------------------------------------------------------*/
      $('.lightbox-gallery').each(function() {
        if ($(this).data('items') || $(this).data('video')) {
          var items = $(this).data('items');
          var images = [];

          angular.forEach(items, function(item) {
            images.push({src: item.url});
          });

          if ($(this).data('video')) {
            images.push({src: $(this).data('video'), type: 'iframe'});
          }

          $(this).magnificPopup({
            items: images,
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1]
            }
          });
        } else {
          $(this).magnificPopup({
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
