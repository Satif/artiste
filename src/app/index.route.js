/*jshint es5: false */
/*jshint -W024 */

(function () {
  'use strict';

  angular
    .module('artside')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          'main@': {
            templateUrl: 'app/core/layouts/basic.html'
          },
          'topbar@app': {
            templateUrl: 'app/navigation/topbar/topbar.html',
            controller: 'TopbarController as vm'
          },
          'sidebar@app': {
            templateUrl: 'app/navigation/sidebar/sidebar.html',
            controller: 'SidebarController as vm'
          }
        }
      });
  }

})();
