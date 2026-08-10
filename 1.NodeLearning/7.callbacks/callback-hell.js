const fs = require('fs') 

fs.readFile('index.txt','utf8',(err,data)=>{
    if(err) {
        console.log("Error Reading file: ",err)
        return
    }
    const modifyFileData = data.toUpperCase();

    fs.writeFile('output.txt',modifyFileData,(err)=>{
        console.error("Error writing File ",err)
        return
    })
    console.log(`Data written to the new file `)


    fs.readFile('output.txt','utf8',(err,data)=>{
        if(err){
            console.log("Error Reading the file ",err)
            return 
        }
        console.log(data)
    })
})