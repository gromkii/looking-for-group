(function(){
  angular
    .module('app', [
      // Core
      'ngRoute',
      'ngAnimate',

      // Directives
      'navbar',
      'userProfile',
      'ui.router',

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
         
})();
