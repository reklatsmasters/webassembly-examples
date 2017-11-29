import('./imul.wasm')
  .then((imul) => imul())
  .then(({ instance: { exports: wasm } }) => {
    console.log('2 * 3 =', wasm.imul(2, 3));
  })
