(function () {
  'use strict';

  angular
    .module('app.components')
    .component('clients', clients());

  /** @ngInject */
  function clients() {
    var component = {
      controller: clientsController,
      controllerAs: 'clientsCtrl',
      templateUrl: 'app/components/clients/clients.component.html',
      bindings: {
        clientsData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function clientsController() {
    var vm = this;

  }
})();
