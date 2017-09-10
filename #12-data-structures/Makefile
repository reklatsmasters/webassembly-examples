EMCC=emcc
WASM_POST_JS=linked-list.post.js
EXPORTED_FUNCTIONS=emscripten-exported.json

%.js: %.c
	$(EMCC) \
		--memory-init-file 0 \
		-s WASM=1 \
		-s NO_EXIT_RUNTIME=1 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s NO_FILESYSTEM=1 \
		-s EXPORTED_FUNCTIONS="@$(EXPORTED_FUNCTIONS)" \
		-s MODULARIZE=1 \
		-s BINARYEN_ASYNC_COMPILATION=0 \
		$< -o $@

all: linked-list.js

clean:
	rm -f linked-list.js linked-list.wasm