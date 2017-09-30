EMCC=emcc

%.js: %.c
	$(EMCC) \
		-s WASM=1 \
		-s EXPORTED_FUNCTIONS='["_sum"]' \
		-s MODULARIZE=1 \
		$< -o $@

all: sum.js

clean:
	rm -f sum.js sum.wasm
