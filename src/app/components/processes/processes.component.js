(function () {
  'use strict';

  angular
    .module('app.components')
    .component('processes', processes());

  /** @ngInject */
  function processes() {
    var component = {
      controller: processesController,
      controllerAs: 'processesCtrl',
      templateUrl: 'app/components/processes/processes.component.html',
      bindings: {
        processesData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function processesController($timeout) {
    var vm = this;

    $timeout(function(){

    }, 0);
  }
})();
