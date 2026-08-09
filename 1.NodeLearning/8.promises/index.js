const { time } = require("node:console");
const { resolve } = require("node:dns");

function delayFn(time){ 
return new Promise((resolve)=>setTimeout(resolve,time))
}

console.log("Promise Lecture Starts")
delayFn(2000).then(()=>{
    console.log("After 2 seconds Promise resolved")
})
console.log("End") 

function divideFn(num1,num2){
    return new Promise((resolve,reject)=>{
        if (num2==0){
            reject("Cannot perform division by 0")
        }else{
            resolve(num1/num2)
        }
    })
}
divideFn(10,0)
.then(result=>console.log(result))
.catch(error=>console.log(error))