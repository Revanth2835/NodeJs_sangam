const express = require('express')

const app = express() 

const requestTimestampLogger =(req,res,next)=>{
    const timeStamp = new Date().toISOString() 

    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
}
app.use(requestTimestampLogger)

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