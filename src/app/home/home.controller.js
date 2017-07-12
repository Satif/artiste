(function () {

  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(Data) {
    var self = this;
    
    self.data = Data[0];
  }

})();
