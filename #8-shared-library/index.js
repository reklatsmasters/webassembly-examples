const library = require('./library')().exports
const wasm = require('./module')({
  imports: {
    ns: {
      table: library.table
    }
  }
}).exports

console.log('shared library:', library.table.get(0)(), library.table.get(1)())
console.log('main module:', wasm.main(1), wasm.main(0))