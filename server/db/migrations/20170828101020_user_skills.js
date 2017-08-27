exports.up = knex => knex.schema.createTable('user_skills', table => {
  table.increments('id').primary()
  table.integer('user_id')

});

exports.down = knex => knex.schema.dropTable('user_skills')
