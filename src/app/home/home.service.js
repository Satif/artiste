(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  /** @ngInject */
  function HomeService($q, $http, CONSTANT) {
    return {
      getAllData: getAllData,
      save: save,
      sendEmail: sendEmail
    };

    function getAllData() {
      var deferred = $q.defer();

      $http.get(CONSTANT.API + '/api/data').then(function(resp) {
        deferred.resolve(resp.data);
      });

      return deferred.promise;
    }

    function save(data) {
      var deferred = $q.defer();

      if (data && data._id) {
        $http.put(CONSTANT.API + '/api/data/' + data._id , data, function(resp) {

        });
      } else {
        $http.post(CONSTANT.API + '/api/data/', data, function(resp) {

        });
      }

      return deferred.promise;
    }

    function sendEmail(data) {
      var deferred = $q.defer();

      $http.post(CONSTANT.API + '/contact-form', data, function(resp) {
        deferred.resolve(resp);
      }, function(err) {
        deferred.reject(err);
      });

      return deferred.promise;
    }
  }

})();
