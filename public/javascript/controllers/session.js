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
    Sessions
      .getSession($routeParams.session_id)
      .then( session => {
        vm.info = session.data;
      })

    Users
      .getCurrentUser()
      .then( results => {
        let user = results ? results.data : null;

        user ? vm.currentUser = user : vm.currentUser = null
        console.log(vm.currentUser);
      })


    function sessionSkill(skill_level){
      return `/assets/skill/${skill_level}.png`;
    }
  }


})();
