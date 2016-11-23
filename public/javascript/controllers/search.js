(function(){
  angular
    .module('searchSessions', [])
    .controller('SearchSessionsController', SearchSessionsController)

  SearchSessionsController.$inject = ['$http']

  function SearchSessionsController($http) {
    var vm = this;

    $http.get('/api/sessions')
      .then( results => {
        console.log(results.data);
        vm.sessions = results.data;
      })
  }
})();
