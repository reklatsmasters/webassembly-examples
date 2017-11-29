import('./imul.wasm').then((wasm) => {
  console.log('2 * 3 =', wasm.imul(2, 3));
})