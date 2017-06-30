(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  /** @ngInject */
  function HomeService($q) {
    // var BackendlessDataStorage = Backendless.Persistence.of('data');
    var dataStorage = Backendless.Data.of('data');
    var thirdStorage = Backendless.Data.of('Third');

    return {
      getAllData: getAllData,
      save: save,
      saveThird: saveThird
    };

    function getAllData() {
      var deferred = $q.defer();

      dataStorage.findFirst()
        .then(function (result) {
          deferred.resolve(result);
        })
        .catch(function (error) {
        });

      return deferred.promise;
    }

    function save(data) {
      var deferred = $q.defer();

      dataStorage.save(data)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function saveThird(data) {
      var deferred = $q.defer();

      thirdStorage.save(data)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }
  }

})();
