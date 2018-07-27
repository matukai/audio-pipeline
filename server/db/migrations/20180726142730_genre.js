
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genres', table => {
    table.increments('id').notNullable();
    table.string('genre').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('genres')
};
