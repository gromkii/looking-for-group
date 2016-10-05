
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', t => {
    t.increments().primary().index(),
    t.string('msg_title'),
    t.text('msg_body'),
    t.integer('sender_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade'),
    t.integer('receiver_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
    t.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
