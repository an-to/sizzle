exports.up = knex => knex.schema.createTable('ingredients', table => {
table.string('ingredient')
});

exports.down = function(knex, Promise) {

};
