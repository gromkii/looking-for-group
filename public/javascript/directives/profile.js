(function(){
  angular
    .module('userProfile', [])
    .directive('userProfile', userProfile)

  function userProfile(){
    var profileObj = {
      restrict:'EA',
      controller:UserProfileController,
      controllerAs:'profile',
      templateUrl:'/views/partials/userprofile.html',
      scope:{
        user:'='
      }
    }

    UserProfileController.$inject = ['$attrs']

    function UserProfileController($attrs){
      let vm = this;
      vm.greeting = "Hey"
    }

    return profileObj;
  }


})()
