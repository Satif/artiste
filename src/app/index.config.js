(function () {
  'use strict';

  angular
    .module('artside')
    .config(config);

  /** @ngInject */
  function config($resourceProvider, $locationProvider) {
    var APP_ID = '0E333A5D-617D-8A64-FFBE-60C7CE45F000';
    var API_KEY = '637C81BA-667F-924A-FF17-3746A31A9900';

    Backendless.initApp(APP_ID, API_KEY);

    // var client = new stitch.StitchClient('artside-ovyoz');
    // var db = client.service('mongodb', 'mongodb-atlas').db('artside');
    //
    // client.login().then(function() {
    //   db.collection('data').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true});
    // }).then(function() {
    //   db.collection('data').find({owner_id: client.authedId()});
    // }).then(function(docs) {
    //   console.log("Found docs", docs);
    //   console.log("[MongoDB Stitch] Connected to Stitch");
    // }).catch(function(err) {
    //     console.error(err)
    // });

    // $resourceProvider.defaults.stripTrailingSlashes = false;

    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();
