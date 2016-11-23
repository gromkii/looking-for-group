(function(){
  angular
    .module('groupChat', ['Chats'])
    .controller('GroupChat', GroupChat)

  GroupChat.$inject = ['$routeParams', 'Chats'];

  function GroupChat($routeParams, Chats){
    let vm = this,
        session = $routeParams.session_id;

    Chats.getChat(session).then( results => {
      if (results.data) {
        vm.posts = results.data;
      }
    });
  }
})();
