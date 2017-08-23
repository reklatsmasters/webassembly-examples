## webassembly-examples

A small collection of examples on [webassembly](http://webassembly.org/).

## Usage

For 1 - 8:

```sh
# start
node ./#-path-to-example/index.js

# rebuild
cd #-path-to-example && wast2js script-name.wat -o script-name.js
```

For 9+ see readme.

##### Ordered list of examples

* [simple function](#1-simple-function)
* [variables](#2-variables)
* [conditions](#3-conditions)
* [memory](#4-memory)
* [loop](#5-loop)
* [block, br, br_if and labels](#6-crc32)
* [call_indirect](#7-call-indirect)
* [shared library](#8-shared-library)
* [simple native function](#9-native-build)
* [emscripten](#10-emscripten)

### License

MIT, 2017+