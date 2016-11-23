(function(){
  angular
    .module('userMessages', [])
    .controller('UserMessages', UserMessages)

  UserMessages.$inject = ['$http'];

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
