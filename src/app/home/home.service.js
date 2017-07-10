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

    var teamsStorage = Backendless.Data.of('Teams');
    var teamStorage = Backendless.Data.of('Team');

    var aboutsStorage = Backendless.Data.of('Abouts');
    var aboutStorage = Backendless.Data.of('About');

    var blogsStorage = Backendless.Data.of('Blogs');
    var blogStorage = Backendless.Data.of('Blog');

    var feedbacksStorage = Backendless.Data.of('Feedbacks');

    var clientsStorage = Backendless.Data.of('Clients');
    var clientStorage = Backendless.Data.of('Client');

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
      removeProcess: removeProcess,
      saveTeam: saveTeam,
      removeTeam: removeTeam,
      saveAbout: saveAbout,
      removeAbout: removeAbout,
      saveBlog: saveBlog,
      removeBlog: removeBlog,
      saveFeedback: saveFeedback,
      removeFeedback: removeFeedback,
      saveClient: saveClient,
      removeClient: removeClient
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

    // TEAM
    function saveTeam(objectId, data) {
      var deferred = $q.defer();

      teamStorage.save(data)
        .then(function (savedObject) {
          teamsStorage.addRelation(objectId, 'teams', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeTeam(id) {
      var deferred = $q.defer();

      teamStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    // ABOUT
    function saveAbout(objectId, data) {
      var deferred = $q.defer();

      aboutStorage.save(data)
        .then(function (savedObject) {
          aboutsStorage.addRelation(objectId, 'abouts', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeAbout(id) {
      var deferred = $q.defer();

      aboutStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    // BLOG
    function saveBlog(objectId, data) {
      var deferred = $q.defer();

      blogStorage.save(data)
        .then(function (savedObject) {
          blogsStorage.addRelation(objectId, 'blogs', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeBlog(id) {
      var deferred = $q.defer();

      blogStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    // FEEDBACKS
    function saveFeedback(objectId, data) {
      var deferred = $q.defer();

      feedbacksStorage.save(data)
        .then(function (savedObject) {
          dataStorage.addRelation(objectId, 'feedbacks', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeFeedback(id) {
      var deferred = $q.defer();

      feedbacksStorage.remove(id)
        .then(function (savedObject) {
          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    // CLIENTS
    function saveClient(objectId, data) {
      var deferred = $q.defer();

      clientStorage.save(data)
        .then(function (savedObject) {
          clientsStorage.addRelation(objectId, 'clients', [savedObject]);

          deferred.resolve(savedObject);
        })
        .catch(function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function removeClient(id) {
      var deferred = $q.defer();

      clientStorage.remove(id)
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
