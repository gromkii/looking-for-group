(function(){
  angular
    .module('session', ['Sessions', 'Users'])
    .controller('SessionController', SessionController);

  SessionController.$inject = ['Sessions', '$stateParams', 'Users'];

  function SessionController(Sessions, $stateParams, Users){
    var vm = this;
    vm.getUser = Users.getUser;
    vm.sessionSkill = sessionSkill;
    vm.isHost = false;
    Sessions
      .getSession($stateParams.session_id)
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
