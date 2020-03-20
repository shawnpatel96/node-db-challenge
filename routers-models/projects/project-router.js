const express = require('express');
const Projects = require('./project-model.js')

const router = express.Router();

router.get('/',(req,res)=>{
    Projects.getAll()
    .then(projects=>{
        res.status(200).json(projects)
    })
    .catch(error=>{
        res.status(500).json({error:'error in getALL Projects'})
    })

})
router.post('/', (req, res)=>{
    Projects.add(req.body)
        .then(project=>{
            res.status(201).json(project)
        })
        .catch(err=>{
            res.status(500).json({error:'error in ADD Projects'})
        })
})

router.put('/:id', (req, res)=>{
    Projects.update(req.body, req.params.id)
        .then(project=>{
            res.status(200).json(project)
        })
        .catch(err=>{
            res.status(500).json({error:'error in PUT Projects'})
        })
})

router.delete('/:id', (req, res)=>{
    Projects.remove(req.params.id)
        .then(project=>{
            res.status(200).json(project)
        })
        .catch(err=>{
            res.status(500).json({error:'error in REMOVE Projects'})
        })
})




module.exports = router;