const wasm = require('./function')().exports

console.log('add1', wasm.add1(10, 20))
console.log('add2', wasm.add2(10, 20))
console.log('add3', wasm.add3(10, 20))