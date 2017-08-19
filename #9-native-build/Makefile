WAST2JS=wast2js
WAST2WASM=wast2wasm
CLANG=clang
LLC=llc
S2WASM=s2wasm
WASMOPT=wasm-opt

%.wasm : %.wat
	$(WAST2WASM) $< -o $@

%.js : %.wat
	$(WAST2JS) $< >$@

%.wat : %.s
	$(S2WASM) $< > $@
	$(WASMOPT) $@ \
		-Oz \
		--coalesce-locals-learning \
		--dce \
		--duplicate-function-elimination \
		--inlining-optimizing \
		--local-cse \
		--merge-blocks \
		--optimize-instructions \
		--reorder-functions \
		--reorder-locals \
		--vacuum \
		--emit-text \
		-o $@

%.s : %.bc
	$(LLC) $< \
		-march=wasm32 \
		-filetype=asm \
		-asm-verbose=false \
		-thread-model=single \
		-data-sections \
		-function-sections \
		-o $@

%.bc : %.c
	$(CLANG) --target=wasm32 -emit-llvm -Oz -c -nostdinc -nostdlib $< -o $@

all: native.js

clean:
	rm -f native.s native.bc native.js native.wat native.wasm