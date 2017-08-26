
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, facility: 'bakery', address: '221b Baker st'},
        {id: 2, facility: 'fishmongery', address: 'Davy Jones locker'},
        {id: 3, facility: 'jam shed', address: 'Strawberry field'}
      ]);
    });
};
