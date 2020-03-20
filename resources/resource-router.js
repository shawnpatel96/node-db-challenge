const express = require('express');
const Resources = require('./resource-model')

const router = express.Router();

router.get('/',(req,res)=>{
    Resources.getAll()
    .then(resources=>{
        res.status(200).json(resources)
    })
    .catch(error=>{
        res.status(500).json({error:'error in getALL Resources'})
    })

})
router.post('/', (req, res)=>{
    Resources.add(req.body)
        .then(resource=>{
            res.status(201).json(resource)
        })
        .catch(err=>{
            res.status(500).json({error:'error in ADD Resources'})
        })
})

router.put('/:id', (req, res)=>{
    Resources.update(req.body, req.params.id)
        .then(resource=>{
            res.status(200).json(resource)
        })
        .catch(err=>{
            res.status(500).json({error:'error in PUT Resources'})
        })
})

router.delete('/:id', (req, res)=>{
    Resources.remove(req.params.id)
        .then(resource=>{
            res.status(200).json(resource)
        })
        .catch(err=>{
            res.status(500).json({error:'error in REMOVE Resources'})
        })
})




module.exports = router;