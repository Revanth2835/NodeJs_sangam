const fs = require('fs')
const path = require("path") 

//create folder
const dataFolder = path.join(__dirname,'data') 

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("Data Folder Created")
}

const filePath = path.join(dataFolder,'example.txt') 
//synchronus way of creating 
fs.writeFileSync(filePath,"Hello from NodeJS")
console.log("File created Successfuly") 

//Read from file
const readContentFromFile = fs.readFileSync(filePath,'utf8')
console.log('FIle content :',readContentFromFile)

// Append lines to existing file 

fs.appendFileSync(filePath,'\nThis is a new line added to that file') 
console.log("New File content Added: ",) 

//Async way of creating a file 
const aysncFilePath = path.join(dataFolder,'async-example.txt')
fs.writeFile(aysncFilePath,"Hello Async Node js",(err)=>{
    if(err) throw err;
    console.log('Async file created Succesfully')

    fs.readFile(aysncFilePath,'utf8',(err,data)=>{
        if(err) throw err;
        console.log('async file content: ',data)
        fs.appendFile(aysncFilePath,'\nThis is another line added',(err)=>{
            if(err) throw err;
            console.log("New Line Added asysnc file")

            fs.readFile(aysncFilePath,'utf8',(err,updatedData)=>{
            if(err) throw err;
            console.log("Updated Data: ",updatedData)
        })
        })
       

    })
})

