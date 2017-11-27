const fs = require('fs')
const file = fs.readFileSync('./hello-gc.wasm', null)

const wasm = new WebAssembly.Instance(new WebAssembly.Module(file), {})

console.log(wasm.exports.sum(2, 3))