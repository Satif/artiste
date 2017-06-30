(function () {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  /* @ngInject */
  function AdminController(HomeService, Data) {
    var vm = this,
        objectId = Data.objectId;

    vm.data = Data;
    vm.save = save;

    vm.addThird = addThird;
    vm.editThird = editThird;
    vm.removeThird = removeThird;
    
    //////////////
    
    function save() {
      HomeService
        .save(vm.data)
        .then(function (resp) {
          console.log(resp);
        });
    }

    function addThird(item) {
      HomeService
        .saveThird(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.third.push(resp);
          } else {
            item.objectId = resp.objectId;
          }
          
          clearThirdForm();
        });
    }

    function editThird(item) {
      vm.newThird = item;
    }

    function removeThird(item) {
      HomeService
        .removeThird(item.objectId)
        .then(function () {
          var index = vm.data.third.indexOf(item);
          vm.data.third.splice(index, 1);
        });
    }
    
    function clearThirdForm() {
      vm.newThird = {};
    }

  }
})();
