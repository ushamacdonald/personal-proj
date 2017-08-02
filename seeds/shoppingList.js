
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoppingList').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingList').insert([
        {id: 101, item: 'milk', date: '03/08/2017', done: false, flattie_id: '1'},
        {id: 102, item: 'bananas', date: '03/08/2017', done: false, flattie_id: '4'},
        {id: 103, item: 'toilet paper', date: '03/08/2017', done: false, flattie_id: '1'},
        {id: 104, item: 'bread', date: '03/08/2017', done: false, flattie_id: '2'},
      ]);
    });
};
