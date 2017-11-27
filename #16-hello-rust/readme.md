Minimal Rust & WebAssembly example. More examples: https://www.hellorust.com.

## Install

* Install [rust](https://www.rust-lang.org/).

* Install WebAssembly target

```sh
rustup update
rustup component add wasm32-unknown-unknown --toolchain nightly
```

* Install wasm-gc (works better than `wasm-opt` from binaryen)

```sh
cargo install --git https://github.com/alexcrichton/wasm-gc
```

## Build

```sh
rustc +nightly --target wasm32-unknown-unknown -O hello.rs --crate-type=cdylib
wasm-gc hello.wasm hello-gc.wasm
```

## Run

```sh
node index.js
```