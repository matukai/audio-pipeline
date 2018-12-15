exports.up = function(knex, Promise) {
  return knex.schema.table('threads', table => {
    table.string('title');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('threads', table => {
    table.dropColumn('title');
  })
};
