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

    // ACHIEVEMENTS
    vm.addAchievement = addAchievement;
    vm.editAchievement = editAchievement;
    vm.removeAchievement = removeAchievement;

    // SERVICES
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


    // ACHIEVEMENTS
    function addAchievement(item) {
      HomeService
        .saveAchievement(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.achievements.push(resp);
          } else {
            item.objectId = resp.objectId;
          }
          
          clearAchievementForm();
        });
    }

    function editAchievement(item) {
      vm.newAchievement = item;
    }

    function removeAchievement(item) {
      HomeService
        .removeAchievement(item.objectId)
        .then(function () {
          var index = vm.data.achievements.indexOf(item);
          vm.data.achievements.splice(index, 1);
        });
    }
    
    function clearAchievementForm() {
      vm.newAchievement = {};
    }


    // SERVICES
    function addService(item) {
      var objectId = Data.services.objectId;

      HomeService
        .saveService(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.services.services.push(resp);
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
          var index = vm.data.services.services.indexOf(item);
          vm.data.services.services.splice(index, 1);
        });
    }

    function clearServiceForm() {
      vm.newService = {};
    }




    // document.getElementById('file').addEventListener('change', handleFileSelect, false);

    // var orderFile;
    // function handleFileSelect(evt) {
    //   orderFile = evt.target.files; // FileList object
    // }
    //
    // vm.uploadFileFunc = uploadFileFunc;
    //
    // function uploadFileFunc() {
    //   if (!orderFile) {
    //     return;
    //   }
    //
    //   Backendless.Files.upload(file, "media", true)
    //     .then(function(resp) {
    //       console.log(resp)
    //     });
    // }



    // ORDERS
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


    // WORKS
    vm.addWork = addWork;
    vm.editWork = editWork;
    vm.removeWork = removeWork;

    function addWork(item) {
      var objectId = Data.works.objectId;

      HomeService
        .saveWork(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.works.works.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearWorkForm();
        });
    }

    function editWork(item) {
      vm.newWork = item;
    }

    function removeWork(item) {
      HomeService
        .removeWork(item.objectId)
        .then(function () {
          var index = vm.data.works.works.indexOf(item);
          vm.data.works.works.splice(index, 1);
        });
    }

    function clearWorkForm() {
      vm.newWork = {};
    }



    // PROCESSES
    vm.addProcess = addProcess;
    vm.editProcess = editProcess;
    vm.removeProcess = removeProcess;

    function addProcess(item) {
      var objectId = Data.processes.objectId;

      HomeService
        .saveProcess(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.processes.processes.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearProcessForm();
        });
    }

    function editProcess(item) {
      vm.newProcess = item;
    }

    function removeProcess(item) {
      HomeService
        .removeProcess(item.objectId)
        .then(function () {
          var index = vm.data.processes.processes.indexOf(item);
          vm.data.processes.processes.splice(index, 1);
        });
    }

    function clearProcessForm() {
      vm.newProcess = {};
    }


    // PROCESSES
    vm.addTeam = addTeam;
    vm.editTeam = editTeam;
    vm.removeTeam = removeTeam;

    function addTeam(item) {
      var objectId = Data.teams.objectId;

      HomeService
        .saveTeam(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.teams.teams.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearTeamForm();
        });
    }

    function editTeam(item) {
      vm.newTeam = item;
    }

    function removeTeam(item) {
      HomeService
        .removeTeam(item.objectId)
        .then(function () {
          var index = vm.data.teams.teams.indexOf(item);
          vm.data.teams.teams.splice(index, 1);
        });
    }

    function clearTeamForm() {
      vm.newTeam = {};
    }


    // ABOUTS
    vm.addAbout = addAbout;
    vm.editAbout = editAbout;
    vm.removeAbout = removeAbout;

    function addAbout(item) {
      var objectId = Data.abouts.objectId;

      HomeService
        .saveAbout(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.abouts.abouts.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearAboutForm();
        });
    }

    function editAbout(item) {
      vm.newAbout = item;
    }

    function removeAbout(item) {
      HomeService
        .removeAbout(item.objectId)
        .then(function () {
          var index = vm.data.abouts.abouts.indexOf(item);
          vm.data.abouts.abouts.splice(index, 1);
        });
    }

    function clearAboutForm() {
      vm.newAbout = {};
    }


    // BLOGS
    vm.addBlog = addBlog;
    vm.editBlog = editBlog;
    vm.removeBlog = removeBlog;

    function addBlog(item) {
      var objectId = Data.blogs.objectId;

      HomeService
        .saveBlog(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.blogs.blogs.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearBlogForm();
        });
    }

    function editBlog(item) {
      vm.newBlog = item;
    }

    function removeBlog(item) {
      HomeService
        .removeBlog(item.objectId)
        .then(function () {
          var index = vm.data.blogs.blogs.indexOf(item);
          vm.data.blogs.blogs.splice(index, 1);
        });
    }

    function clearBlogForm() {
      vm.newBlog = {};
    }


    // FEEDBACKS
    vm.addFeedback = addFeedback;
    vm.editFeedback = editFeedback;
    vm.removeFeedback = removeFeedback;

    function addFeedback(item) {
      HomeService
        .saveFeedback(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.feedbacks.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearFeedbackForm();
        });
    }

    function editFeedback(item) {
      vm.newFeedback = item;
    }

    function removeFeedback(item) {
      HomeService
        .removeFeedback(item.objectId)
        .then(function () {
          var index = vm.data.feedbacks.indexOf(item);
          vm.data.feedbacks.splice(index, 1);
        });
    }

    function clearFeedbackForm() {
      vm.newFeedback = {};
    }


    // CLIENTS
    vm.addClient = addClient;
    vm.editClient = editClient;
    vm.removeClient = removeClient;

    function addClient(item) {
      var objectId = Data.clients.objectId;

      HomeService
        .saveClient(objectId, item)
        .then(function (resp) {
          if (!item.objectId) {
            vm.data.clients.clients.push(resp);
          } else {
            item.objectId = resp.objectId;
          }

          clearClientForm();
        });
    }

    function editClient(item) {
      vm.newClient = item;
    }

    function removeClient(item) {
      HomeService
        .removeClient(item.objectId)
        .then(function () {
          var index = vm.data.clients.clients.indexOf(item);
          vm.data.clients.clients.splice(index, 1);
        });
    }

    function clearClientForm() {
      vm.newClient = {};
    }

  }
})();
