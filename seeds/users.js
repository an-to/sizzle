
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'rowValue2', username:'', hash:'', email: '', phone:''},
        {id: 2, name: 'rowValue2', username:'', hash:'', email: '', phone:''},
        {id: 3, name: 'rowValue2', username:'', hash:'', email: '', phone:''},
        {id: 4, name: 'rowValue2', username:'', hash:'', email: '', phone:''}

      ]);
    });
};
