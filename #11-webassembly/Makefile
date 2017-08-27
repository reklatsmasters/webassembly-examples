CC=npx wa-compile

all: crc32.wasm

%.wasm : %.c
	$(CC) -O -o $@ $<

install:
	npm i webassembly

clean:
	rm -f *.wasm