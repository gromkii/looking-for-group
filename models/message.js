'use strict'

const bookshelf = require('../db/bookshelf');

require('./user');

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

module.exports = bookshelf.model('Message', Message)
