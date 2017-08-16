const wasm = require('./call')().exports

console.log(wasm.main())  // 10
console.log(wasm.main())  // 20
console.log(wasm.main())  // 10
console.log(wasm.main())  // 20