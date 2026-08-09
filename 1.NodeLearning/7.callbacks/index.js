const fs = require("fs") 



function person(name,calllbackFn){
    console.log(`Hello ${name}`)
    calllbackFn()
}

function address(){
    console.log("INdia")
}

person("Revanth",address)


fs.readFile('index.txt','utf8',(err,data)=>{
    if(err) {
        console.log("Error Reading file: ",err)
        return
    }
    console.log(data)
})