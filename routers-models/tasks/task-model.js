  
module.exports = {
    getAll,
    add,
    update,
    remove
}

const db = require('../../data/db-config');

function getAll(){
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('projects.project-name', 'projects.project-description', 'tasks.task-description')
}

function add(task){
    return db('tasks')
    .insert(task);
}

function update(task, id){
    return db('tasks')
    .where({id})
    .update(task)
}

function remove(id){
    return db('tasks')
    .where({id})
    .del();
}