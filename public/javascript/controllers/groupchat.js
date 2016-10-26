(function(){
  angular
    .module('groupChat', ['Chats'])
    .config(routeConfig)
    .controller('GroupChat', GroupChat)

  routeConfig.$inject = ['$routeProvider', '$locationProvider'];
  GroupChat.$inject = ['$routeParams', 'Chats'];

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/dashboard/sessions/:session_id/chat', {
        templateUrl:'/views/dashboard/groupchat.html',
        controller:'GroupChat',
        controllerAs:'chat'
      });

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
  }

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
