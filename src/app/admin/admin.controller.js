(function () {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  /* @ngInject */
  function AdminController(HomeService, Data) {
    var vm = this;

    vm.data = Data;
    vm.save = save;

    //////////////
    
    function save() {
      HomeService
        .save(vm.data)
        .then(function (resp) {
          console.log(resp);
        });
    }


  }
})();
