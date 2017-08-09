(module
  (memory $0 1)
  (export "memory" (memory $0))
  (export "crc32" (func $crc32))
  
  (func $crc32 (param $crc i32) (param $ptr i32) (param $length i32) (result i32)
    (local $i i32)

    ;; crc = ~crc
    (set_local $crc (i32.xor (get_local $crc) (i32.const -1)))
    
    (block $break
      (loop $continue
        ;; while($len != 0)
        (br_if $break (i32.eqz (get_local $length)))
        
        ;; crc = CRC_TABLE[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)
        (set_local $crc (i32.xor
            (i32.load (i32.mul (i32.and (i32.xor (get_local $crc) 
              (i32.load8_u (i32.add (get_local $ptr) (get_local $i))) ;; buf[ptr + i]
            ) (i32.const 255)) (i32.const 4)))
            (i32.shr_u (get_local $crc) (i32.const 8)) ;; crc >>> 8
          )
        )
        
        ;; ++i
        (set_local $i (i32.add (get_local $i) (i32.const 1)))
        ;; --length
        (set_local $length (i32.add (get_local $length) (i32.const -1)))
        ;; continue
        (br $continue)
      )
    )
    
    ;; return ~crc
    (i32.xor (get_local $crc) (i32.const -1))
  )
)
