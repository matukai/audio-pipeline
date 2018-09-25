
exports.up = function(knex, Promise) {
  return knex.schema.table('threads', table => {
    table.integer('comment_id').references('id').inTable('comments')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('threads', table => {
    table.dropColumn('comment_id')
  })
};
