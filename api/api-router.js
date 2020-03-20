const express = require('express');
const pRouter = require("../projects/project-router");
const tRouter = require('../tasks/task-router')
const rRouter = require('../resources/resource-router')



const router = express.Router();


router.use('/projects', pRouter);
router.use('/tasks', tRouter)
router.use('/resources', rRouter)


module.exports = router;