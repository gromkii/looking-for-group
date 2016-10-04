
exports.up = function(knex, Promise) {
  return knex.schema.table('users', t => {
    t.string('twitter'),
    t.string('discord'),
    t.string('skype'),
    t.text('about_me'),
    t.string('looking_for')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', t => {
    t.dropColumn('twitter'),
    t.dropColumn('discord'),
    t.dropColumn('skype'),
    t.dropColumn('about_me'),
    t.dropColumn('looking_for')
  })
};
