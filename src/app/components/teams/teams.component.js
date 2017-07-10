(function () {
  'use strict';

  angular
    .module('app.components')
    .component('teams', teams());

  /** @ngInject */
  function teams() {
    var component = {
      controller: teamsController,
      controllerAs: 'teamsCtrl',
      templateUrl: 'app/components/teams/teams.component.html',
      bindings: {
        teamsData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function teamsController() {
    var vm = this;

  }
})();
