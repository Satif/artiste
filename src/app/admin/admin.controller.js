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

    vm.addNewThird = addNewThird;

    var dataStorage = Backendless.Data.of('data');
    var thirdStorage = Backendless.Data.of('Third');
    
    //////////////
    
    function save() {
      HomeService
        .save(vm.data)
        .then(function (resp) {
          console.log(resp);
        });
    }

    function addNewThird(newItem) {
      HomeService
        .saveThird(newItem)
        .then(function (resp) {
          var newThirdArray = vm.data.third;
          dataStorage.setRelation(vm.data, 'third:Third:n', [ resp ]);
        });
    }

  }
})();
