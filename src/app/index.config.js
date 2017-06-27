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

    // $resourceProvider.defaults.stripTrailingSlashes = false;

    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();
