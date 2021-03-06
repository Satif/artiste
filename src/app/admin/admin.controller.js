(function () {
  'use strict';

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);

  /* @ngInject */
  function AdminController($scope, HomeService, Data, filepickerService) {
    var vm = this;

    vm.data = Data[0];
    vm.save = save;

    vm.upload = upload;
    vm.uploadMultiple = uploadMultiple;

    vm.addItem = addItem;
    vm.editItem = editItem;
    vm.removeItem = removeItem;
    vm.clearForm = clearForm;

    //////////////
    
    function save() {
      HomeService
        .save(vm.data)
        .then(function (resp) {
          vm.data = resp;
        });
    }

    function upload(modelPath, modelProp) {
      filepickerService.pick({
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE', 'FACEBOOK', 'INSTAGRAM'],
        openTo: 'COMPUTER'
      }, function(Blob) {
        modelPath[modelProp] = '';
        modelPath[modelProp] = Blob;

        $scope.$apply();
      });

    }

    function uploadMultiple(modelPath, modelProp) {
      filepickerService.pickMultiple({
        mimetype: 'image/*',
        language: 'en',
        services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE', 'FACEBOOK', 'INSTAGRAM'],
        openTo: 'COMPUTER'
      }, function(Blob) {
        modelPath[modelProp] = '';
        modelPath[modelProp] = Blob;

        $scope.$apply();
      });

    }

    // ACHIEVEMENTS
    function addItem(item, field, fromObj) {
      if (vm.data && vm.data[field][field]) {
        var index = vm.data[field][field].indexOf(item);

        if (index > -1) {
          vm.data[field][field][index] = item;
        } else {
          vm.data[field][field].push(item);
        }

        save();
        clearForm(fromObj);
      }
    }

    function editItem(formObj, item) {
      vm[formObj] = item;
    }

    function removeItem(item, field) {
      if (vm.data && vm.data[field][field]) {
        var index = vm.data[field][field].indexOf(item);

        vm.data[field][field].splice(index, 1);
        save();
      }
    }

    function clearForm(formObj) {
      vm[formObj] = null;
    }
  }
})();
