exports.up = function(knex, Promise) {
  return knex.schema.table('threads', table => {
    table.string('link');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('threads', table => {
    table.dropColumn('link');
  })
};
