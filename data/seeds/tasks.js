
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Use Genie Wish One', project_id: 1},
        {id: 2, description: 'Play Naruto Music', project_id: 1},
        {id: 3, description: 'Have you tried Playing more Naurto Music you spud', project_id: 1}
      ]);
    });
};
