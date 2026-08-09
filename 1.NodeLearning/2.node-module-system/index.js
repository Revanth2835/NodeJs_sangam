/*
module.exports --> export 
used to export modules

//require --> import 
used to import modules 
*/

const firstModule = require('./first-module') ;

console.log(firstModule.add(10,20)) ;


try{
    console.log('tring to divide ny 0');
    let result = firstModule.divide(0,0);
    console.log(result);

}catch(error){
console.log("Caught an error",error)
}


// Module wrapper 

// (
// function(exports,require,module,__filename,__dirname){
//     // Module code goes here

//     }   
// )