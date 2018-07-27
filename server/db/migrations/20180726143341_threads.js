exports.up = function(knex, Promise) {
  return knex.schema.createTable('threads', table => {
    table.increments('id').notNullable();
    table.text('body').notNullable();
    table.integer('user_id').references('id').inTable('users');
    table.integer('subgenre_id').references('id').inTable('subgenres');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('threads')
};