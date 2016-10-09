(function(){
  angular
    .module('session', ['Sessions', 'Users'])
    .config(routeConfig)
    .controller('SessionController', SessionController);

  routeConfig.$inject = ['$routeProvider', '$locationProvider']
  SessionController.$inject = ['Sessions', '$routeParams', 'Users'];

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/sessions/:session_id', {
        templateUrl:'/views/dashboard/sessions/show.html',
        controller:'SessionController',
        controllerAs:'session'
      });

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
  }

  function SessionController(Sessions, $routeParams, Users){
    var vm = this;
    vm.getUser = Users.getUser;
    vm.sessionSkill = sessionSkill;
    vm.isHost = false;
    Sessions
      .getSession($routeParams.session_id)
      .then( session => {
        vm.info = session.data;
      }).then( () => {
        Users
          .getCurrentUser()
          .then( results => {
            console.log(results.data.id);
            vm.currentUser = results.data.id ? results.data : {id: 0};
            if(vm.currentUser.id === vm.info.host.id) {
              console.log('isHost');
              vm.isHost = true;
            }
          })
      })


    function sessionSkill(skill_level){
      return `/assets/skill/${skill_level}.png`;
    }
  }


})();
