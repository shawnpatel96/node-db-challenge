const express = require('express');
const Tasks = require('./task-model');

const router = express.Router();

router.get('/',(req,res)=>{
    Tasks.getAll()
    .then(tasks=>{
        res.status(200).json(tasks)
    })
    .catch(error=>{
        res.status(500).json({error:'error in getALL Tasks'})
    })

})
router.post('/', (req, res)=>{
    Tasks.add(req.body)
        .then(task=>{
            res.status(201).json(task)
        })
        .catch(err=>{
            res.status(500).json({error:'error in ADD Tasks'})
        })
})

router.put('/:id', (req, res)=>{
    Tasks.update(req.body, req.params.id)
        .then(task=>{
            res.status(200).json(task)
        })
        .catch(err=>{
            res.status(500).json({error:'error in PUT Tasks'})
        })
})

router.delete('/:id', (req, res)=>{
    Tasks.remove(req.params.id)
        .then(task=>{
            res.status(200).json(task)
        })
        .catch(err=>{
            res.status(500).json({error:'error in REMOVE Tasks'})
        })
})




module.exports = router;