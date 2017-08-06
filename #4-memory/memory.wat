(module
  (memory (export "memory") 1 10)
  
  (func (export "sum8") (result i32)
    (i32.load8_u (i32.const 0))
    (i32.load8_u (i32.const 1))
    (i32.add)
  )
  
  (func (export "sum32") (result i32)
    (i32.load (i32.const 0))
    (i32.load (i32.const 4))
    (i32.add)
  )
)