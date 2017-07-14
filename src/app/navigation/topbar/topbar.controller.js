(function () {

  'use strict';

  angular
    .module('app.topbar')
    .controller('TopbarController', TopbarController);

  /** @ngInject */
  function TopbarController(HomeService, AdminLoginService, $state, $rootScope) {
    var vm = this;

    vm.isLogined = AdminLoginService.isLogined();
    vm.logout = logout;

    ///////////////////

    $rootScope.$on('login', function () {
      vm.isLogined = true;
    });

    HomeService.getAllData().then(function(resp) {
      vm.data = resp[0];
    });

    function logout() {
      AdminLoginService.logout();
      $state.go('app.home');
      vm.isLogined = false;
    }
  }

})();
