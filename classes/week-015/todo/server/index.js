const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')
const app = express();
const port = 4000
 console.log(path.dirname('../client/public/'))
 
// import and use the routes
app.use(express.static(path.join(__dirname, '../client/public')));
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
    console.log(` Listen On Port  ${port}`)
})

 