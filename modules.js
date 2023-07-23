// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require('./test-module-1')
const calc1 = new C() // creating a new instance of C
console.log(calc1.add(2, 5));

// exports

const calc2 = require('./test-module-2')
const { add, multiply, divide } = require('./test-module-2') // most common way
// console.log(calc2.add(3, 6));
console.log(add(3, 6));

// caching
require('./test-module-3')()
require('./test-module-3')()
require('./test-module-3')()