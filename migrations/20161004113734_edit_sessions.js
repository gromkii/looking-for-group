
exports.up = function(knex, Promise) {
  return knex.schema.table('sessions', t => {
    t.string('frequency'),
    t.string('session_type'),
    t.boolean('mature_content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('sessions', t => {
    t.dropColumn('frequency'),
    t.dropColumn('session_type'),
    t.dropColumn('mature_content')
  })
};
