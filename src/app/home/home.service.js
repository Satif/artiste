(function () {
  'use strict';

  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  /** @ngInject */
  function HomeService($q) {
    // var BackendlessDataStorage = Backendless.Persistence.of('data');
    var dataStorage = Backendless.Data.of('data');

    var achievementStorage = Backendless.Data.of('Achievement');

    var servicesStorage = Backendless.Data.of('Services');
    var serviceStorage = Backendless.Data.of('Service');

    var orderStorage = Backendless.Data.of('Orders');

    var worksStorage = Backendless.Data.of('Works');
    var workStorage = Backendless.Data.of('Work');

    var processesStorage = Backendless.Data.of('Processes');
    var processStorage = Backendless.Data.of('Process');

    return {
      getAllData: getAllData,
      save: save,
      saveAchievement: saveAchievement,
      removeAchievement: removeAchievement,
      saveService: saveService,
      removeService: removeService,
      saveOrder: saveOrder,
      removeOrder: removeOrder,
      saveWork: saveWork,
      removeWork: removeWork,
      saveProcess: saveProcess,
      removeProcess: removeProcess
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

    // ACHIEVEMENTS
    function saveAchievement(objectId, data) {
      var deferred = $q.defer();

      achievementStorage.save(data)
        .then(function (savedObject) {
          dataStorage.addRelation(objectId, 'achievements', [savedObject]);
          
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeAchievement(id) {
      var deferred = $q.defer();

      achievementStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    // SERVICES
    function saveService(objectId, data) {
      var deferred = $q.defer();

      serviceStorage.save(data)
        .then(function (savedObject) {
          servicesStorage.addRelation(objectId, 'services', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeService(id) {
      var deferred = $q.defer();

      serviceStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    // ORDERS
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

    // WORKS
    function saveWork(objectId, data) {
      var deferred = $q.defer();

      workStorage.save(data)
        .then(function (savedObject) {
          worksStorage.addRelation(objectId, 'works', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeWork(id) {
      var deferred = $q.defer();

      workStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    // PROCESSES
    function saveProcess(objectId, data) {
      var deferred = $q.defer();

      processStorage.save(data)
        .then(function (savedObject) {
          processesStorage.addRelation(objectId, 'processes', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeProcess(id) {
      var deferred = $q.defer();

      processStorage.remove(id)
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
