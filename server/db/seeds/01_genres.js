
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        {id: 1, genre: 'Hip-Hop'},
        {id: 2, genre: 'Country'},
        {id: 3, genre: 'Electronic'},
        {id: 4, genre: 'Classical'},
        {id: 5, genre: 'Rock'},
        {id: 6, genre: 'Indie'}
      ]);
    });
};
