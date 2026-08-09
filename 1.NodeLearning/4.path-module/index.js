const path = require('path') 

console.log("Directory Name: ",path.dirname(__filename))

console.log("File Name: ",path.basename(__filename))

console.log("Extension Name: ",path.extname(__filename)) 

const joinPath =  path.join('/user','documents','node','projects');
console.log("joined path :",  joinPath) 

const resolvePath = path.resolve('user','documents','node','project')
console.log("Resolve path: ",resolvePath) 

const normalizePath = path.normalize('./user/.documents/../node/projects')
console.log("normalize path",normalizePath)
