
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'A Genie'},
        {id: 2, name: 'Naruto Music'},
        {id: 3, name: 'rowValue3'}
      ]);
    });
};
