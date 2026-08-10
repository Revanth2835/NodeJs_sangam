const { log } = require('console')
const http = require('http') 

const server = http.createServer((req , res)=>{

    // console.log(req,'req') 
    console.log(req.method);
    console.log(req.url);
    
    
    res.writeHead(200,{"Content-Type" : 'text/html'})
    res.end("<h1>Hello From Node js from http module</h1>")
})

const port = 3000 
server.listen(port,()=>{
    console.log(`server is now listening to port ${port} `)
    
})