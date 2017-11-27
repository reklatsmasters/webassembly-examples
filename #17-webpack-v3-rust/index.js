// `url-loader` adds mime-type to the encoded module.
// So, we need to remove this prefix.
const PREFIX_SIZE = 29;

import('./imul.wasm')
  .then((base64) => toUint8Array(base64.slice(PREFIX_SIZE)))
  .then((buffer) => WebAssembly.instantiate(buffer, {}))
  .then(({ instance: { exports: wasm } }) => {
    console.log('2 * 3 =', wasm.imul(2, 3));
  })

function toUint8Array(s) {
  return new Uint8Array(atob(s).split('').map(charCodeAt));
}

function charCodeAt(c) {
  return c.charCodeAt(0);
}