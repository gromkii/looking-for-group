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
})();
