## Install

* Install [rust](https://www.rust-lang.org/)

* Install WebAssembly target
```bash
rustup update
rustup component add wasm32-unknown-unknown --toolchain nightly
```

* Install wasm-gc (works better than `wasm-opt` from binaryen)
```bash
cargo install --git https://github.com/alexcrichton/wasm-gc
```

* Install node modules
```bash
npm i
```

* Install webpack#next

```bash
npm un -g webpack
git clone git@github.com:webpack/webpack.git --depth 1 --single-branch --branch next
cd webpack && npm i --production
npm link
```

* Install web server
```bash
npm i -g webpack-dev-server
```

## Build

* Build webassembly
```bash
rustc +nightly --target wasm32-unknown-unknown -O imul.rs --crate-type=cdylib
wasm-gc imul.wasm imul.wasm
```

* Build final bundle
```bash
webpack
```

## Run

* Start web server

```bash
webpack-dev-server
```

* Open dev tools / console

```
$ 2 * 3 = 6
```

# Known issues

There are a few Chrome-specific issues:

* `TypeError: Incorrect response MIME type. Expected 'application/wasm'`. 

You should explicitly set mime type for `.wasm` files. This caused by [`Webassembly.compileStreaming()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming).

* `RangeError: WebAssembly.Instance is disallowed on the main thread, if the buffer size is larger than 4KB`.

Current implementation in webpack#next used [synchronous instantiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance). 