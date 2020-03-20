const express = require('express');
const pRouter = require("../routers-models/projects/project-router");
const tRouter = require('../routers-models/tasks/task-router')
const rRouter = require('../routers-models/resources/resource-router')



const router = express.Router();


router.use('/projects', pRouter);
router.use('/tasks', tRouter)
router.use('/resources', rRouter)


module.exports = router;


