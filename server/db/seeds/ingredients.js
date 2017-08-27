
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'tomato', kg: '1kg'},
        {id: 2, ingredient: 'chicken', kg: '3kg'},
        {id: 3, ingredient: 'cheese', kg: '1kg'}
      ]);
    });
};
