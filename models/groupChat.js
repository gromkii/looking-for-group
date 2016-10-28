const bookshelf = require('../db/bookshelf');

require('./user');
require('./session');

var GroupChat = bookshelf.Model.extend({
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
