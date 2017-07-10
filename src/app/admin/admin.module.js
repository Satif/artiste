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
      .state('app.admin.achievements', {
        url: '/achievements',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.achievements': {
            templateUrl: 'app/admin/templates/achievements.html'
          }
        }
      })
      .state('app.admin.services', {
        url: '/services',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.services': {
            templateUrl: 'app/admin/templates/services.html'
          }
        }
      })
      .state('app.admin.orders', {
        url: '/orders',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.orders': {
            templateUrl: 'app/admin/templates/orders.html'
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
      .state('app.admin.processes', {
        url: '/processes',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.processes': {
            templateUrl: 'app/admin/templates/processes.html'
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
      .state('app.admin.blogs', {
        url: '/blogs',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.blogs': {
            templateUrl: 'app/admin/templates/blogs.html'
          }
        }
      })
      .state('app.admin.feedbacks', {
        url: '/feedbacks',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.feedbacks': {
            templateUrl: 'app/admin/templates/feedbacks.html'
          }
        }
      })
      .state('app.admin.clients', {
        url: '/clients',
        views: {
          'content@app': {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminController as vm'
          },
          'nest@app.admin.clients': {
            templateUrl: 'app/admin/templates/clients.html'
          }
        }
      });
  }
})();
