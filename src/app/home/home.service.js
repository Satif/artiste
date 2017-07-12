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

      $http.get('http://localhost:8888/api/data').then(function(resp) {
        deferred.resolve(resp.data);
      });

      return deferred.promise;
    }

    function save(data) {
      var deferred = $q.defer();
      console.log(data)

      if (data && data._id) {
        $http.put('http://localhost:8888/api/data/' + data._id , data, function(resp) {

        });
      } else {
        $http.post('http://localhost:8888/api/data/', data, function(resp) {

        });
      }


      // $http.post('/api/data', {'data': data}).then(function(resp) {
      //   deferred.resolve(resp);
      // });

      // dataStorage.save(data)
      //   .then(function (savedObject) {
      //     deferred.resolve(savedObject);
      //   })
      //   .catch(function (error) {
      //     deferred.reject(error);
      //   });

      return deferred.promise;
    }
  }

})();
