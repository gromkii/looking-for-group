(function(){
  angular
    .module('Chats', [])
    .factory('Chats', Chats);

  Chats.$inject = ['$http'];

  function Chats($http){
    let Chat = {
      getChat:getChat
    }

    function getChat(session_id){
      $http.get(`/api/sessions/${session_id}/chat`)
        .then( results => {
          if (results) => {
            return results;
          } else {
            return {error: "getChat error."}
          }
        });
    }

    return Chat;
  }
})()
