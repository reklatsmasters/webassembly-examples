import wasmBinaryUrl from './sum.wasm'
import emscripten from './sum'

const HResult = document.querySelector('#result')

const wasm = emscripten({
  locateFile,
  onRuntimeInitialized
})

// @link http://kripken.github.io/emscripten-site/docs/api_reference/module.html#Module.locateFile
function locateFile() {
  return wasmBinaryUrl
}

function onRuntimeInitialized() {
  HResult.innerHTML = `Init success!<br>1 + 3 = ${wasm._sum(1, 3)}`
}
