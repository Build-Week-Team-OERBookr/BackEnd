
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "username": "test",
          "password": "testing123",
        },
        {
          "username": "ndawi",
          "password": "boredlately",
        },
        {
          "username": "Kenneth",
          "password": "kenny2.0",
        },
        {
          "username": "admin",
          "password": "admin",
        }
      ]);
    });
};
