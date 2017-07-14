(function () {

  'use strict';

  angular
    .module('artside')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $location, $cookies) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      var sideAuth = $cookies.get('artside');

      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $location.path().indexOf('admin') !== -1 && $location.path().indexOf('admin-login') === -1;
      if (restrictedPage && !sideAuth) {
        $location.path('/');
      }
    });
  }
})();
