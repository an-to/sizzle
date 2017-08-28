exports.up = knex => knex.schema.createTable('events', table => {
  table.increments('id').primary()
  table.date('date')
  table.boolean('is_am')
  table.string('description')
  table.integer('location_id')


});

exports.down = knex => knex.schema.dropTable('events')
