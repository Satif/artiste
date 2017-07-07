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

    }, 0);
  }
})();
