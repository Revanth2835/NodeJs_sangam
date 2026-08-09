
const lodash = require('lodash') 

const names = ['revanth','kumar','pujari'] 

const capitals = lodash.map(names , lodash.upperCase) 
console.log(capitals)