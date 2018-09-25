
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments('id').notNullable();
    table.text('body').notNullable();
    table.integer('thread_id').references('id').inTable('threads');
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
