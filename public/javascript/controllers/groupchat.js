(function(){
  angular
    .module('groupChat', ['Chats'])
    .controller('GroupChat', GroupChat)

  GroupChat.$inject = ['$stateParams', 'Chats'];

  function GroupChat($stateParams, Chats){
    let vm = this,
        session = $stateParams.session_id;

    Chats.getChat(session).then( results => {
      if (results.data) {
        vm.posts = results.data;
      }
    });
  }
})();
