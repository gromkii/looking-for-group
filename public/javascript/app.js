(function(){
  angular
    .module('app', [
      // Core
      'ngRoute',
      'ui.router',

      // Directives
      'navbar',
      'userProfile',

      // Controllers
      'index',
      'dashboard',
      'session',
      'newSession',
      'userSession',
      'userMessages',
      'searchSessions',
      'groupChat',
      'logout',

      // Factories
      'Sessions',
      'Users',
      'Messages',
      'Chats'
     ]
   )
  // .config(stateConfig)
  //
  // stateConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  //
  // function stateConfig($stateProvider, $urlRouterProvider) {
  //   $stateProvider
  //     .state('index', {
  //       url:'/',
  //       controller:'IndexController',
  //       controllerAs:'index',
  //       templateUrl:'views/index/index.html'
  //     })
  //
  //     .state('dashboard', {
  //       url:'/dashboard',
  //       controller:'DashboardController',
  //       controllerAs:'dashboard',
  //       templateUrl:'views/dashboard/index.html'
  //     })
  //
  //     .state('sessions.show', {
  //       url:'/sessions/:session_id',
  //       templateUrl:'views/dashboard/sessions/show.html',
  //       controller:'SessionController',
  //       controllerAs:'session'
  //     })
  // }

})();
