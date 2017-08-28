exports.up = knex => knex.schema.createTable('resource', table => {
  table.increments('id').primary()
  table.string('title')
  table.string('type')
  table.integer('user_id')
  table.integer('event_id')


});

exports.down = knex => knex.schema.dropTable('resource')
