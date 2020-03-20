const express = require('express');

const apiRouter= require('./api-router.js')
const server = express();

server.use(express.json());
server.use('/', apiRouter)

server.get('/', (req, res)=>{
    res.status(200).json({api:'up'})
})

module.exports = server