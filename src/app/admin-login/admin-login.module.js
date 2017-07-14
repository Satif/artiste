(function () {
  'use strict';

  angular
    .module('app.admin-login', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('app.admin-login', {
        url: '/admin-login',
        views: {
          'content@app': {
            templateUrl: 'app/admin-login/admin-login.html',
            controller: 'AdminLoginController as vm'
          }
        },
        resolve: {
          Data: function(HomeService) {
            return HomeService.getAllData();
          }
        }
      });
  }
})();
