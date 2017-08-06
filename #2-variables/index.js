const wasm = require('./variables')({async: false}).exports

console.log('uninit32', wasm.uninit32())
// console.log('uninit64', wasm.uninit64())

console.log('add10', wasm.add10(2))
console.log('sub10', wasm.sub10(2))
console.log('add100', wasm.add100(2))
console.log('CONST_B', wasm.CONST_B)
