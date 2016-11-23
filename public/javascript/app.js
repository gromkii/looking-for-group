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

    .config(stateConfig)

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function stateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url:'/',
          templateUrl:'views/index/index.html',
          controller:'IndexController',
          controllerAs:'index'
        })

        .state('dashboard', {
          url:'/dashboard',
          controller:'DashboardController',
          controllerAs:'dashboard',
          templateUrl:'views/dashboard/index.html'
        })

        .state('sessions', {
          url:'/sessions/{session_id}',
          templateUrl:'/views/dashboard/sessions/show.html',
          controller:'SessionController',
          controllerAs:'session'
        })

        .state('search', {
          url:'/dashboard/sessions/search',
          templateUrl:'/views/dashboard/sessions/search.html',
          controller:'SearchSessionsController',
          controllerAs:'search'
        })

        .state('groupchat', {
          url:'/dashboard/sessions/:session_id/chat',
          templateUrl:'/views/dashboard/groupchat.html',
          controller:'GroupChat',
          controllerAs:'chat'
        })

        .state('messages', {
          url:'/dashboard/users/messages',
          templateUrl:'/views/dashboard/messages.html',
          controller:'UserMessages',
          controllerAs:'messages'
        })

        .state('userSessions', {
          url:'/dashboard/users/sessions',
          templateUrl:'/views/dashboard/sessions/usersessions.html',
          controller:'UserSessionController',
          controllerAs:'userSession'
        })

        .state('newSession', {
          url:'/dashboard/sessions/new',
          templateUrl:'/views/dashboard/sessions/new.html',
          controller:'NewSessionController',
          controllerAs:'new'
        })

        .state('logout', {
          url:'/auth/logout',
          controller:'LogoutController'
        })

      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      })
    }

})();
