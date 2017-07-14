(function () {
  'use strict';

  angular
    .module('app.admin-login')
    .factory('AdminLoginService', AdminLoginService);

  /** @ngInject */
  function AdminLoginService($q, $http, $cookies) {
    return {
      login: login,
      cr: cr,
      saveToken: saveToken,
      isLogined: isLogined,
      logout: logout
    };

    function login(data) {
      var deferred = $q.defer();

      $http.post('http://localhost:8888/authenticate', data).then(function(resp) {
        deferred.resolve(resp);
      }, function(err) {
        deferred.reject(err);
      });

      return deferred.promise;
    }

    function cr() {
      var deferred = $q.defer();

      $http.get('http://localhost:8888/setup', function(resp) {
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
