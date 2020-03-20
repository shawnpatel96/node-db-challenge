
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        // Main Tables 

        // PROJECT TABLE 
        //ID | NAME | DESCRIPTION | COMPLETED BOOLEAN
        tbl
            .increments();
        tbl
            .string('name', 255)
            .notNullable()
            .unique();
        tbl
            .string('description', 255)
        tbl
            .boolean('completed')
            .notNullable()
            .defaultTo(false)
    })
    .createTable('resources', tbl => {
        // RESOURCE TABLE
        // ID | NAME | DESCRIPTION 
        tbl
            .increments()
        tbl
            .string('name', 255)
            .notNullable()
            .unique()
        tbl
            .string('description', 255);
    })
    .createTable('tasks', tbl => {
        // TASK TABLE
        // ID | TASK-DESCRIPTION | NOTES | COMPLETED BOOLEAN
        tbl
            .increments()
        tbl
            .string('task-description', 255)
            .notNullable()
        tbl
            .string('notes', 255)
        tbl
            .boolean('completed')
            .notNullable()
            .defaultTo(false)
        
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .notNullable()
        
    })

    // BYPRODUCT TABLE
    .createTable('project_resources', tbl => {
        tbl.primary(['project_id', 'resources_id'])

        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .notNullable()
          

        tbl.integer('resources_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .notNullable()
          
    })


  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
