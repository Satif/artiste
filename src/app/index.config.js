(function () {
  'use strict';

  angular
    .module('artside')
    .config(config);

  /** @ngInject */
  function config($locationProvider, filepickerProvider) {
    filepickerProvider.setKey('AhWQJdjATTyXIDeoTem2rz');

    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();
