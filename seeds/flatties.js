
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flatties').del()
    .then(function () {
      // Inserts seed entries
      return knex('flatties').insert([
        {id: 1, name:'Leah' , description:'Nana' , image:'http://via.placeholder.com/100x140', at_home: false},
        {id: 2, name:'Matt' , description:'Chilldude' , image:'http://via.placeholder.com/100x140', at_home: false},
        {id: 3, name:'Amelie' , description:'Mum' , image:'http://via.placeholder.com/100x140', at_home: false},
        {id: 4, name:'Usha' , description:'Baby' , image:'http://via.placeholder.com/100x140', at_home: false}
      ]);
    });
};
