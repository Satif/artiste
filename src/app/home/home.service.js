(function() {
  'use strict';

  angular
    .module('app.home')
    .factory('HomeService', HomeService);

  /** @ngInject */
  function HomeService($q) {
    // var BackendlessDataStorage = Backendless.Persistence.of('data');
    
    return {
      getAllData: getAllData,
      save: save
    };
    
    function getAllData() {
      var deferred = $q.defer();

      Backendless.Persistence.of('data').findFirst()
        .then(function( result ) {
          deferred.resolve(result);
        })
        .catch(function( error ) {
        });

      return deferred.promise;
    }
    
    function save(data) {
      var deferred = $q.defer();
      
      Backendless.Data.of('data').save(data)
        .then( function( savedObject ) {
          deferred.resolve(savedObject);
        })
        .catch( function( error ) {
          deferred.reject(error);
        });

      return deferred.promise;
    }
  }

})();
