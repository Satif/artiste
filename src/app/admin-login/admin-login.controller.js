(function () {
  'use strict';

  angular
    .module('app.admin-login')
    .controller('AdminLoginController', AdminLoginController);

  /* @ngInject */
  function AdminLoginController(AdminLoginService, $state, $rootScope) {
    var vm = this;

    vm.login = login;

    /////////////

    function login() {
      AdminLoginService.login(vm.user).then(function(resp) {
        if (resp && resp.data.token) {
          AdminLoginService.saveToken(resp.data.token);
          $rootScope.$broadcast('login');
          $state.go('app.admin.slider');
        }
      });
    }
  }
})();
