'use strict'

const bookshelf = require('bookshelf');

require('./models/user');

let Message = bookshelf.Model.extend({
  tableName:'messages',
  hasTimestamps:true,
  sender(){
    return this.belongsTo('User', 'id');
  },
  receiver(){
    return this.belongsTo('User', 'id');
  }
})
