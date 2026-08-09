console.log("Wrapper demo") 

console.log("__filename in wrapper Explorer",__filename)
console.log("__dirname in wrapper Explorer",__dirname)

module.exports.greet = function(name){
    console.log("Hello",name)
}
