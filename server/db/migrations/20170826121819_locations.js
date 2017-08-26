
exports.up = knex => knex.schema.createTable('locations', table => {
  table.increments('id').primary()
  table.string('facility')
  table.string('address')
});

exports.down = knex => knex.schema.dropTable('locations')
