
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('events', function (table) {
    table.increments('id');
    table.string('title');
    table.date('start');
    table.date('end')
    table.integer('noticeBoard_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events')
};
