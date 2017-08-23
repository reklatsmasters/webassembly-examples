const assert = require('assert')
const wasm = require('./crc32')

// define wrapper around crc32
function crc32(buf, crc = 0) {
  if (!Buffer.isBuffer(buf)) {
    buf = Buffer.from(buf)
  }
  
  // allocate internal memory for Buffer buf
  // return pointer (int value) to free memory
  const mem = wasm._malloc(buf.length)
  
  // fill memory, copy data
  wasm.HEAPU8.set(buf, mem)
  
  // call wasm function directly
  const result = wasm._crc32(mem, buf.length, crc)
  
  // free memory
  wasm._free(mem)
  return result
}

// test verctor taken from
// @link http://reveng.sourceforge.net/crc-catalogue/17plus.htm#crc.cat.crc-32

// wasm will initialised asynchronously
// this callback will called after `WebAssembly.instantiate` (when Promise will resolved)
wasm.onRuntimeInitialized = () => {
  const crc = crc32('123456789') >>> 0

  assert.strictEqual(crc, 0xcbf43926)
  console.log(crc)
}
