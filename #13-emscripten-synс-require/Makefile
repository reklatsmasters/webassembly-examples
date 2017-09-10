EMCC=emcc

crc32.js: crc32.c
	$(EMCC) \
		-s WASM=1 \
		-s EXPORTED_FUNCTIONS='["_crc32"]' \
		-s MODULARIZE=1 \
		-s BINARYEN_ASYNC_COMPILATION=0 \
		$< -o $@

all: crc32.js

clean:
	rm -f crc32.js crc32.wat crc32.wasm