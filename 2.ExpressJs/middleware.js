const express = require('express')

const app = express() 

//define middleware 
// Middl eware runs on every request
const myMiddleWareFunction = (req,res,next)=>{
    console.log("the first middleware will run on every request ")
    next()
}

app.use(myMiddleWareFunction)

app.get('/',(req,res)=>{
    res.send("HOme Page")
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

const port = 3000 

app.listen(port,()=>{
    console.log(`the port is running on ${port}`)
})