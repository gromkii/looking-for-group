(function(){
  angular
    .module('Messages', [])
    .factory('Messages', Messages)

  Messages.$inject = ['$http'];

  function Messages($http){
    var messageObj = {
      getMessage,
      newMessage
    }

    function getMessage(message_id){
      return $http.get(`/api/messages/${message_id}`)
    }

    function newMessage(){
      return $http.post('/api/messages')
    }

    return messageObj;
  }
})()
