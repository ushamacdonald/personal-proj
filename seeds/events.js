
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 301, title: 'Birthday Party', start:'2017-7-11', end: '2017-7-11', noticeBoard_id: 201},
        {id: 302, title: 'Movie night', start: '2017-7-8', end: '2017-7-8', noticeBoard_id: 202},
      ]);
    });
};
