
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('noticeBoard').del()
    .then(function () {
      // Inserts seed entries
      return knex('noticeBoard').insert([
        {id: 201, message: 'juna stole all the bread', date: '03/08/2017', flattie_id: '1'},
        {id: 202, message: 'movie night on thursday', date: '03/08/2017', flattie_id: '2'},
        {id: 203, message: 'this is a message', date: '03/08/2017', flattie_id: '3'}
      ]);
    });
};
