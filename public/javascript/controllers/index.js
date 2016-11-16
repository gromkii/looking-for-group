(function(){
  angular
    .module('index', ['Users'])
    .controller('IndexController', IndexController);

  IndexController.$inject = ['Users']

  function IndexController(Users){
    var vm = this;
  }
})();
