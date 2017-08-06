const instance = require('./memory')()
const wasm = instance.exports

// Складываем значения int8.

instance.memory.set([3, 22])

console.log(instance.memory.slice(0, 10))
console.log('sum', wasm.sum8())

// Складываем значения int32.

const i32arr = new Uint32Array(instance.memory.buffer)
i32arr[0] = 3
i32arr[1] = 22

console.log(instance.memory.slice(0, 10))
console.log('sum', wasm.sum32())