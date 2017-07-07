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
    var fourthStorage = Backendless.Data.of('Fourth');
    var servicesStorage = Backendless.Data.of('Services');
    var orderStorage = Backendless.Data.of('Orders');

    return {
      getAllData: getAllData,
      save: save,
      saveThird: saveThird,
      removeThird: removeThird,
      saveService: saveService,
      removeService: removeService,
      saveOrder: saveOrder,
      removeOrder: removeOrder
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

    function saveThird(objectId, data) {
      var deferred = $q.defer();

      thirdStorage.save(data)
        .then(function (savedObject) {
          dataStorage.addRelation(objectId, 'third', [savedObject]);
          
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeThird(id) {
      var deferred = $q.defer();

      thirdStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function saveService(objectId, data) {
      var deferred = $q.defer();

      servicesStorage.save(data)
        .then(function (savedObject) {
          fourthStorage.addRelation(objectId, 'services', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeService(id) {
      var deferred = $q.defer();

      servicesStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function saveOrder(objectId, data) {
      var deferred = $q.defer();

      orderStorage.save(data)
        .then(function (savedObject) {
          dataStorage.addRelation(objectId, 'orders', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeOrder(id) {
      var deferred = $q.defer();

      orderStorage.remove(id)
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
