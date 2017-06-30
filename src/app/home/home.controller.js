(function () {

  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(Data) {
    console.log(Data)
    var self = this;
    
    self.data = Data;
  }

})();
