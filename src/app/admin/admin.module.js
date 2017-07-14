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
      })
      .state('app.admin.slider', {
        url: '/slider',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.slider': {
            templateUrl: 'app/admin/templates/slider.html'
          }
        }
      })
      .state('app.admin.welcome', {
        url: '/welcome',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.welcome': {
            templateUrl: 'app/admin/templates/welcome.html'
          }
        }
      })
      .state('app.admin.works', {
        url: '/works',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.works': {
            templateUrl: 'app/admin/templates/works.html'
          }
        }
      })
      .state('app.admin.teams', {
        url: '/teams',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.teams': {
            templateUrl: 'app/admin/templates/teams.html'
          }
        }
      })
      .state('app.admin.abouts', {
        url: '/abouts',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.abouts': {
            templateUrl: 'app/admin/templates/abouts.html'
          }
        }
      })
      .state('app.admin.contacts', {
        url: '/contacts',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.contacts': {
            templateUrl: 'app/admin/templates/contacts.html'
          }
        }
      });
  }
})();
