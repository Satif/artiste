(function () {
  'use strict';

  angular
    .module('app.components')
    .component('abouts', abouts());

  /** @ngInject */
  function abouts() {
    var component = {
      controller: aboutsController,
      controllerAs: 'aboutsCtrl',
      templateUrl: 'app/components/abouts/abouts.component.html',
      bindings: {
        aboutsData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function aboutsController($timeout) {
    var vm = this;

    $timeout(function(){
      /* Counters
       -------------------------------------------------------*/
      var $section = $('#skills').appear(function () {

        function loadDaBars() {
          var bar = $('.progress-bar');
          var bar_width = $(this);
          $(function () {
            $(bar).each(function () {
              bar_width = $(this).attr('aria-valuenow');
              $(this).width(bar_width + '%');
            });
          });
        }

        loadDaBars();
      });
    }, 0);
  }
})();
