(function () {

  'use strict';

  angular
    .module('artside', [

      // Core
      'app.core',
      'app.components',

      // Navigation
      'app.sidebar',
      'app.topbar',

      // Views
      'app.login',
      'app.register',
      'app.home',
      'app.admin'

    ]);
})();
