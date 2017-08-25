exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('username')
  table.string('name')
  table.string('address')
  table.string('email')
  table.string('phone')
  table.binary('hash')
})

exports.down = knex => knex.schema.dropTable('users')
