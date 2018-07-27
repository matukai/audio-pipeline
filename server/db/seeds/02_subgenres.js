
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subgenres').del()
    .then(function () {
      // Inserts seed entries
      return knex('subgenres').insert([
        {id: 1, subgenre: 'Trance', genre_id: 3},
      ]);
    });
};
