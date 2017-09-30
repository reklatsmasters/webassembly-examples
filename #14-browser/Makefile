EMCC=emcc

crc32.js: crc32.c
	$(EMCC) \
		-s WASM=1 \
		-s EXPORTED_FUNCTIONS='["_crc32"]' \
		-s MODULARIZE=1 \
		$< -o $@

all: crc32.js

clean:
	rm -f crc32.js crc32.wasm
