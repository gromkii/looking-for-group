
exports.up = function(knex, Promise) {
  return knex.schema.createTable('approve_applications', table => {
    table.integer('app_id')
      .references('id')
      .inTable('session_applications')
      .onDelete('cascade'),
    table.integer('session_id')
      .references('id')
      .inTable('sessions')
      .onDelete('cascade'),
    table.integer('applicant_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('approve_applications');
};
