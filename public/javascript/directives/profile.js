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

    function UserProfileController(){
      let vm = this;

      vm.greeting = "Hello.";
    }

    return profileObj;
  }


})()
