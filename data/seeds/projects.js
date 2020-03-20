
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'WOrld Domination', description:"Bring the World to it's knees"},
        {id: 2, name: 'World DOmination Part Two', description:"Pull the WOrld back up, stronger"},
        {id: 3, name: 'Profit??', description:"That better have worked"}
      ]);
    });
};
