const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express();
const port = 4000
 
 
app.use(cors())
app.use(express.static('../app/public'));
app.use(bodyParser.json())
app.use('/api',  require("./router/routes"))
 
// app.get("/", (req, res)=>{
//     console.log("request")
//     res.send({
//         name:"jimo"
//     })
//  })
// app.post("/", (req,res)=>{
//     console.log(res)
//     res.send("get request")
// })


app.listen(port, ()=>{
    console.log(` Listen On Port  http://localhost:${port}/api/todos/`)
})

 