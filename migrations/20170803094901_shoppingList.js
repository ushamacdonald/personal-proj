
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('shoppingList', function (table) {
    table.increments('id');
    table.string('item');
    table.string('date');
    table.boolean('done');
    table.integer('flattie_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shoppingList')
};
