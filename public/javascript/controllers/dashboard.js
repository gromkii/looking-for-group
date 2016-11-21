(function(){
  angular
    .module('dashboard', [])
    .config(routeConfig)
    .controller('DashboardController', DashboardController);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    function routeConfig($routeProvider, $locationProvider) {
      $routeProvider
        .when('/dashboard', {
          controller:'DashboardController',
          controllerAs:'dashboard',
          templateUrl:'views/dashboard/index.html'
        })

      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      })
    }

    function DashboardController(){
      let vm = this;

      vm.greeting = 'Suh';
    }
})();
