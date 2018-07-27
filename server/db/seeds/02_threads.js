
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('threads').del()
    .then(function () {
      // Inserts seed entries
      return knex('threads').insert([
        {id: 1, body: 'this subgenre rocks', user_id: 1, subgenre_id: 1}
      ]);
    });
};
