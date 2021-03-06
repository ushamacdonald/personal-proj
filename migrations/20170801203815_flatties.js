
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('flatties', function (table) {
    table.increments('id');
    table.string('name');
    table.string('description');
    table.string('image');
    table.boolean('at_home');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flatties')
};
