exports.up = knex => knex.schema.createTable('user_ingredient', table => {
  table.increments('id').primary()
  table.integer('user_id')
  table.integer('ingredient_id')
  table.integer('kg')
});

exports.down = knex => knex.schema.dropTable('user_ingredient')
