const wasm = require('./variables')().exports

console.log('local32', wasm.local32())
// console.log('local64', wasm.local64())

console.log('add10', wasm.add10(2))
console.log('sub10', wasm.sub10(2))
console.log('add100', wasm.add100(2))
console.log('CONST_B', wasm.CONST_B)
