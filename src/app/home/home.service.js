(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  /** @ngInject */
  function HomeService($q, $http) {
    var datas = null;

    return {
      getAllData: getAllData,
      save: save
    };

    function getAllData() {
      var deferred = $q.defer();

      $http.get('http://localhost:8888/api/data').then(function(resp) {
        deferred.resolve(resp.data);
      });
      
      // if (datas) {
      //   deferred.resolve(datas);
      // } else {
      //   $http.get('http://localhost:8888/api/data').then(function(resp) {
      //     if (resp && resp.data) {
      //       datas = resp;
      //     }
      //
      //     deferred.resolve(resp.data);
      //   });
      // }

      return deferred.promise;
    }

    function save(data) {
      var deferred = $q.defer();

      if (data && data._id) {
        $http.put('http://localhost:8888/api/data/' + data._id , data, function(resp) {

        });
      } else {
        $http.post('http://localhost:8888/api/data/', data, function(resp) {

        });
      }

      return deferred.promise;
    }
  }

})();
