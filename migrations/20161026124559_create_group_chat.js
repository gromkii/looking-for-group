
exports.up = function(knex, Promise) {
  return knex.schema.createTable('group_chat', t => {
    t.integer('session_id')
      .references('id')
      .inTable('sessions')
      .onDelete('cascade'),
    t.integer('poster_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade'),
    t.text('post_body'),
    t.timestamps()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('group_chat');
};
