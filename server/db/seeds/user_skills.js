
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_skills').insert([
        {id: 1, user_id: ''},
        {id: 2, user_id: ''},
        {id: 3, user_id: ''}
      ]);
    });
};
