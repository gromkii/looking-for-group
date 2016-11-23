(function(){
  angular
    .module('dashboard', [])
    .controller('DashboardController', DashboardController);

    function DashboardController(){
      let vm = this;

      vm.greeting = 'Suh';
    }
})();
