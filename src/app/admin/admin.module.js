(function () {
  'use strict';

  angular
    .module('app.admin', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('app.admin', {
        url: '/admin',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
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
