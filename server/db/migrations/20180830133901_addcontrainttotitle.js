exports.up = function(knex, Promise) {
  return knex.schema.alterTable('threads', table => {
    table.string('title').notNullable().alter();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('threads', table => {
    table.dropColumn('title');
  })
};