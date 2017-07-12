(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  /** @ngInject */
  function HomeService($q, $http) {
    return {
      getAllData: getAllData,
      save: save
    };

    function getAllData() {
      var deferred = $q.defer();

      $http.get('/api/data').then(function(resp) {
        deferred.resolve(resp.data);
      });

      return deferred.promise;
    }

    function save(data) {
      var deferred = $q.defer();

      if (data && data._id) {
        $http.put('/api/data/' + data._id , data, function(resp) {

        });
      } else {
        $http.post('/api/data/', data, function(resp) {

        });
      }

      return deferred.promise;
    }
  }

})();
