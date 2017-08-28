
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_ingredient').insert([
        {id: 1, user_id: '', ingredient_id: '', kg: '2kg' },
        {id: 2, user_id: '', ingredient_id: '', kg: '2kg' },
        {id: 3, user_id: '', ingredient_id: '', kg: '2kg' }
      ]);
    });
};
