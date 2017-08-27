exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id').primary()
  table.string('ingredient')
  table.integer('kg')
});

exports.down = knex => knex.schema.dropTable('ingredients')
