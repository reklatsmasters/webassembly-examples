const wasm = require('./native')().exports

console.log('add', wasm.add(10, 20))