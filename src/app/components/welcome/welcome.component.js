(function () {
  'use strict';

  angular
    .module('app.components')
    .component('welcome', welcome());

  /** @ngInject */
  function welcome() {
    var component = {
      controller: welcomeController,
      controllerAs: 'welcomeCtrl',
      templateUrl: 'app/components/welcome/welcome.component.html',
      bindings: {
        welcomeData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function welcomeController() {
    var vm = this;

  }
})();
