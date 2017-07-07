(function () {
  'use strict';

  angular
    .module('app.components')
    .component('achievements', achievements());

  /** @ngInject */
  function achievements() {
    var component = {
      controller: achievementsController,
      controllerAs: 'achievementsCtrl',
      templateUrl: 'app/components/achievements/achievements.component.html',
      bindings: {
        listData: "<"
      }
    };

    return component;
  }

  /* @ngInject */
  function achievementsController($timeout) {
    var vm = this;

    $timeout(function(){
      /* Counters
       -------------------------------------------------------*/
      $('.statistic').appear(function () {
        $('.timer').countTo({
          speed: 4000,
          refreshInterval: 60,
          formatter: function (value, options) {
            return value.toFixed(options.decimals);
          }
        });
      });
    }, 0);
  }
})();
