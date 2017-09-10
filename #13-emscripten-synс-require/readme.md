This example shows the way of synchronous initialization of WebAssembly using `Emscripten`.

### Install

This example required:

* [`emscripten`](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)

This example used undocumented option `BINARYEN_ASYNC_COMPILATION`. This option can helps you turn off async compilation. **N.B** It may not work in Chrome (*not in nodejs*) due to current limitations there.

##### Build and Run

```sh
$ make && node index.js
```