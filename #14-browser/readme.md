This example shows the way of working with WebAssembly in the browser.

### Install

This example required:

* [`emscripten`](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)
* modern browser: Safari 11, Edge 16, Chrome 57, Firefox 52
* some http server, [browser-sync](https://www.npmjs.com/package/browser-sync), [serve](https://www.npmjs.com/package/serve), etc.

##### Build and Run

```
make

# start http server
browser-sync start --server
```