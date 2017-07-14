(function () {
  'use strict';

  angular
    .module('app.admin-login')
    .factory('AdminLoginService', AdminLoginService);

  /** @ngInject */
  function AdminLoginService($q, $http, $cookies, CONSTANT) {
    return {
      login: login,
      cr: cr,
      saveToken: saveToken,
      isLogined: isLogined,
      logout: logout
    };

    function login(data) {
      var deferred = $q.defer();

      $http.post(CONSTANT.API + '/authenticate', data).then(function(resp) {
        deferred.resolve(resp);
      }, function(err) {
        deferred.reject(err);
      });

      return deferred.promise;
    }

    function cr() {
      var deferred = $q.defer();

      $http.get(CONSTANT.API + '/setup', function(resp) {
        deferred.resolve(resp);
      }, function(err) {
        deferred.reject(err);
      });

      return deferred.promise;
    }

    function saveToken(token) {
      return $cookies.put('artside', token);
    }

    function isLogined() {
      return !!$cookies.get('artside');
    }

    function logout() {
      return $cookies.remove('artside');
    }
  }

})();
