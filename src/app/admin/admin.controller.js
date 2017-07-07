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

    vm.addService = addService;
    vm.editService = editService;
    vm.removeService = removeService;

    vm.addOrder = addOrder;
    vm.editOrder = editOrder;
    vm.removeOrder = removeOrder;
    
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

    function addService(item) {
      var objectId = Data.fourth.objectId;

        HomeService
        .saveService(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.fourth.services.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearServiceForm();
        });
    }

    function editService(item) {
      vm.newService = item;
    }

    function removeService(item) {
      HomeService
        .removeService(item.objectId)
        .then(function () {
          var index = vm.data.fourth.services.indexOf(item);
          vm.data.fourth.services.splice(index, 1);
        });
    }

    function clearServiceForm() {
      vm.newService = {};
    }




    document.getElementById('file').addEventListener('change', handleFileSelect, false);

    var orderFile;
    function handleFileSelect(evt) {
      orderFile = evt.target.files; // FileList object
    }

    vm.uploadFileFunc = uploadFileFunc;

    function uploadFileFunc() {
      if (!orderFile) {
        return;
      }

      Backendless.Files.upload(file, "media", true)
        .then(function(resp) {
          console.log(resp)
        });
    }



    function addOrder(item) {
      HomeService
        .saveOrder(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.orders.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearOrderForm();
        });
    }

    function editOrder(item) {
      vm.newOrder = item;
    }

    function removeOrder(item) {
      HomeService
        .removeOrder(item.objectId)
        .then(function () {
          var index = vm.data.orders.indexOf(item);
          vm.data.orders.splice(index, 1);
        });
    }

    function clearOrderForm() {
      vm.newService = {};
    }

  }
})();
