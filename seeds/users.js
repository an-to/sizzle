
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'annelise toh', username:'an-toh', hash:'', email:'annelise@gmail.com', phone:'0271234567'},
        {id: 2, name: 'carla weiss', username:'carlaw', hash:'', email:'carla@gmail.com', phone:'0271234567'},
        {id: 3, name: 'chris chou', username:'chrisc', hash:'', email:'chris@gmail.com', phone:'0271234567'},
        {id: 4, name: 'gabriel canaan', username:'gabe', hash:'', email:'gabriel@gmail.com', phone:'0271234567'}

      ]);
    });
};
