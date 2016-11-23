(function(){
  angular
    .module('newSession', ['Sessions'])
    .controller('NewSessionController', NewSessionController)

  NewSessionController.$inject = ['Sessions'];


  function NewSessionController(Sessions){
    var vm = this;

    vm.post = Sessions.newSession();

  }
})();
