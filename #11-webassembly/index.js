const wasm = require('webassembly')
const assert = require('assert')

wasm.load('crc32.wasm').then(main).catch(e => console.error(e))

// wrapper
function _crc32({crc32, _malloc, _free}, memory) {
  return (buf, crc = 0) => {
    if (!Buffer.isBuffer(buf)) {
      buf = Buffer.from(buf)
    }
    
    // allocate internal memory for Buffer buf
    // return pointer (int value) to free memory
    const mem = _malloc(buf.length)
    
    // fill memory, copy data
    memory.U8.set(buf, mem)
    
    // call wasm function directly
    const result = crc32(mem, buf.length, crc)
    
    // free memory
    _free(mem)
    return result
  }
}

function main(library) {
  const crc32 = _crc32(library.exports, library.memory)
  const crc = crc32('123456789') >>> 0
  
  assert.strictEqual(crc, 0xcbf43926)
  console.log(`crc32('123456789') =`, crc)
}