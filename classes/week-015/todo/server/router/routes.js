const express = require("express")
const bodyParser = require('body-parser')

const router = express.Router();

router.get('/todos', (req, res)=>{
    res.send({type: "Get To Do Lidfdf dsfsdf dsfsdfsdfst Items sdfsdf"})
})
 // post adds a new post
router.post('/todos', (req, res)=>{
    console.log(req.body)
    res.send({type:"POST", data:[req.body]})
})

// put updates a post so we need a unique id.
router.put('/todos:id', (req, res)=>{
    res.send({type:"PUT",  id:"id of todo to update"})
})



// delte will remove a post based on the id
router.delete('/todos:id', (req, res)=>{
    res.send({type:"DELETE", id:req.body})
})


module.exports= router;
 