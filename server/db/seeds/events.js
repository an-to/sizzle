
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, date: new Date(2017,08,27), is_am: 't', description: 'Newtown School community get together', location_id: '3' },
        {id: 2, date: new Date(2017,09,02), is_am: 'f', description: 'cancer society fundraiser', location_id: '1' },
        {id: 3, date: new Date(2017,09,08), is_am: 't', description: 'kaibosh fundraiser', location_id: '2' }
      ]);
    });
};
