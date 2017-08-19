### native-build example

This example shows the way to compile C source code to WebAssembly using `clang` + `binaryen` + `wast2js`.

##### Install

This example required:

* [cmake](https://cmake.org/)
* [clang + tools](http://llvm.org/)
* [binaryen](https://github.com/WebAssembly/binaryen)
* [wabt](https://github.com/WebAssembly/wabt)

Windows Note: Use [`Windows Subsystem for Linux`](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux) to save your time.

##### Build

```sh
$ make
```