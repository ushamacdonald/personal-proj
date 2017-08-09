
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flatties').del()
    .then(function () {
      // Inserts seed entries
      return knex('flatties').insert([
        {id: 1, name:'Leah' , description:'Nana' , image:'/images/leah.png', at_home: false},
        {id: 2, name:'Matt' , description:'Chill dude' , image:'/images/matt.png', at_home: false},
        {id: 3, name:'Amelie' , description:'Mum' , image:'/images/amelie.png', at_home: false},
        {id: 4, name:'Usha' , description:'Baby' , image:'/images/usha.png', at_home: false}
      ]);
    });
};
