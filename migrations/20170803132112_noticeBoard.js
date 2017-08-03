
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('noticeBoard', function (table) {
    table.increments('id');
    table.string('message');
    table.string('date');
    table.integer('flattie_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('noticeBoard')
};
