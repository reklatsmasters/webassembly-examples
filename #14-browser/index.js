/**
 * WASM wrapper was loaded before.
**/

// wasm was compiled with `MODULARIZE` option
const wasm = Module()
const HResult = document.querySelector('#result')
const encoder = new TextEncoder('utf-8')

/**
 * Wrapper around crc32.
 * @param {String|ArrayBuffer|TypedArray} buf 
 * @param {Number} crc 
 */
function crc32(buf, crc = 0) {
  if (typeof buf === 'string') {
    buf = encoder.encode(buf)
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

// browser used async init only.
// P.S browser exposes limited sync init,
// Do NOT USE IT, PLEASE!
wasm.onRuntimeInitialized = () => {
  HResult.innerHTML = 'Initialized!'
  
  setTimeout(test, 0)
}

/**
 * Small crc32 perfomance test.
 */
function test() {
  const test100b = new Uint8Array(100)
  const test1k = new Uint8Array(1024)
  const test10k = new Uint8Array(10*1024)
  const testCount = 1e5
  let res = 0
  let t0, t1

  t0 = performance.now();
  for(let i = 0; i < testCount; ++i) {
    test100b[res] = i & 0xFF

    res = crc32(test100b) & 0xff
  }
  t1 = performance.now();
  HResult.innerHTML += '<br><b>100b:</b>&nbsp;' + (t1 - t0).toFixed(2);
  
  res = 0

  t0 = performance.now();
  for(let i = 0; i < testCount; ++i) {
    test1k[res] = i & 0xFF

    res = crc32(test1k) & 0xff
  }
  t1 = performance.now();
  HResult.innerHTML += '<br><b>1k:</b>&nbsp;' + (t1 - t0).toFixed(2)
  
  t0 = performance.now();
  for(let i = 0; i < testCount; ++i) {
    test10k[res] = i & 0xFF

    res = crc32(test10k) & 0xff
  }
  t1 = performance.now();
  HResult.innerHTML += '<br><b>10k:</b>&nbsp;' + (t1 - t0).toFixed(2)
}