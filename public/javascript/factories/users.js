(function(){
  angular
    .module('Users', [])
    .factory('Users', Users)

  Users.$inject = ['$http'];

  function Users($http) {
    var returnObj = {
      getAllUsers: getAllUsers,
      getCurrentUser: getCurrentUser
    }

    function getAllUsers() {
      return $http.get('/api/users')
    }

    function getUsers(user_id){
      return $http.get(`/api/users/${user_id}`);
    }

    function getCurrentUser() {
      return $http.get('/auth/user')
    }

    return returnObj;
  }
})();
