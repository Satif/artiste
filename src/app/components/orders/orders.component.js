(function () {
  'use strict';

  angular
    .module('app.components')
    .component('orders', orders());

  /** @ngInject */
  function orders() {
    var component = {
      controller: ordersController,
      controllerAs: 'ordersCtrl',
      templateUrl: 'app/components/orders/orders.component.html',
      bindings: {
        ordersData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function ordersController($timeout) {
    var vm = this;

    $timeout(function(){

    }, 0);
  }
})();
