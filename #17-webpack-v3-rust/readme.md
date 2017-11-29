This example shows you how to use Rust in the Web using WebAssembly and webpack.

## Install

* Install [rust](https://www.rust-lang.org/).

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

* Install web server
```bash
npm i -g webpack-dev-server
```

## Build

* Build rust source
```bash
rustc +nightly --target wasm32-unknown-unknown -O imul.rs --crate-type=cdylib
wasm-gc imul.wasm imul.wasm
```

* Finalise using webpack
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