module.exports = {
    getAll,
    add,
    update,
    remove
}

const db = require('../../data/db-config');

function getAll(){
    return db('resources');
}

function add(resource){
    return db('resources')
    .insert(resource);
}

function update(resource, id){
    return db('resources')
    .where({id})
    .update(resource)
}

function remove(id){
    return db('resources')
    .where({id})
    .del();
}