const assert = require('assert')
const fs = require('fs')
// `emscripten` is function due to `MODULARIZE` option
const emscripten = require('./crc32')

// sync init
const wasmBinary = fs.readFileSync('./crc32.wasm')
const wasm = emscripten({ wasmBinary })

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

const crc = crc32('123456789') >>> 0

assert.strictEqual(crc, 0xcbf43926)
console.log(crc)
