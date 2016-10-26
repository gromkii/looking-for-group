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
      return $http.get(`/api/sessions/${session_id}/chat`)
    }

    return Chat;
  }
})()
