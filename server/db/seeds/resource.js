
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, title: 'rowboat',type: 'location', user_id: 10, event_id: null },
        {id: 2, title: 'rowboat',type: 'ingredient', user_id: 11, event_id: null },
        {id: 3, title: 'rowboat',type: 'skill', user_id: 12, event_id: null }

      ]);
    });
};
