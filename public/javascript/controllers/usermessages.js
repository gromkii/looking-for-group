(function(){
  angular
    .module('userMessages', [])
    .config(routeConfig)
    .controller('UserMessages', UserMessages)

  routeConfig.$inject = ['$routeProvider', '$locationProvider'];
  UserMessages.$inject = ['$http'];

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/dashboard/users/messages', {
        templateUrl:'/views/dashboard/messages.html', // Need to break up later.
        controller:'UserMessages',
        controllerAs:'messages'
      });

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
  }

  function UserMessages($http){
    let vm = this;

    vm.test = "Suh";

    $http.get('/auth/user')
      .then( results => {
        let user = results ? results.data : null
        console.log(user);
        if (user) {
          $http.get(`/api/users/${user.id}/messages/`)
            .then( results => {
              vm.msg = results ? results.data : null;
            })
        }
      })
  }

})()
