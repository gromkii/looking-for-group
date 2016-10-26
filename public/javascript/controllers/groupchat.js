(function(){
  angular
    .module('groupChat', [])
    .config(routeConfig)
    .controller('GroupChat', GroupChat)

  routeConfig.$inject = ['$routeProvider', '$locationProvider'];



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

  function GroupChat(){
    var vm = this;

    
  }
})();
