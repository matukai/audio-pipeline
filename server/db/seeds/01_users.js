
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'admin1', email: 'admin1@gmail.com', password: 'admin1'},
        {id: 2, username: 'admin2', email: 'admin2@gmail.com', password: 'admin2'},
        {id: 3, username: 'admin3', email: 'admin3@gmail.com', password: 'admin3'}
      ]);
    });
};
