const NULL = 0

class Node {
  constructor(ptr) {
    this.ptr = ptr;
  }
  
  get data() {
    const size = Module._LL_size(this.ptr)
    const data_ptr = Module._LL_data(this.ptr)
    const buf = Module.HEAPU8.slice(data_ptr, data_ptr + size)

    return Buffer.from(buf).toString()
  }
  
  valueOf() {
    return this.data
  }
  
  toString() {
    return this.data
  }
}

class LinkedList {
  constructor() {
    this._first_ptr = -1
    this._last_ptr = -1
  }
  
  push(str) {
    if (typeof str !== 'string') {
      str = str.toString()
    }

    const buf = Buffer.from(str)
    const size = buf.byteLength
    const ptr = malloc(size)

    Module.HEAPU8.set(buf, ptr)
    
    if (this._first_ptr === -1) {
      this._first_ptr = Module._LL_create(ptr, size)
      this._last_ptr = this._first_ptr
    } else {
      this._last_ptr = Module._LL_insert(this._last_ptr, ptr, size)
    }
    
    return this._last_ptr
  }
  
  get length() {
    if (this._first_ptr === -1) {
      return 0
    }
    
    return Module._LL_length(this._first_ptr)
  }

  clear() {
    if (this._first_ptr === -1) {
      return
    }
    
    Module._LL_clear(this._first_ptr)
    this._first_ptr = this._last_ptr = -1
  }
  
  [Symbol.iterator]() {
    let current_ptr = this._first_ptr

    function next() {
      if (current_ptr === -1 || current_ptr === NULL) {
        return {
          done: true
        }
      }
      
      const result = {
        done: false,
        value: new Node(current_ptr)
      }
      
      current_ptr = Module._LL_next(current_ptr)
      return result
    }
    
    return {
      next
    }
  }
}

function malloc(size) {
  const addr = Module._malloc(size)

  if (addr === 0) {
    throw new Error('out of memory')
  }

  return addr
}

const ready = new Promise(resolve => {
  Module.onRuntimeInitialized = resolve
})

module.exports = {
  LinkedList,
  ready
}