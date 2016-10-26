const bookshelf = require('bookshelf');

require('./user');
require('./session');

let GroupChat = bookshelf.Model.extend({
  tableName:'group_chat',
  hasTimestamps:true,
  users(){
    return this.belongsTo('User');
  },
  sessions(){
    return this.belongsTo('Session')
  }
});

module.exports = bookshelf.model('GroupChat', GroupChat);
