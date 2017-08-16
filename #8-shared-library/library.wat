;; Shared library. We use Webassembly.Table to store export table.
;; We can modify this table later from js runtime.
(module
  (table anyfunc (elem $library1 $library2))
  
  (type $t (func (result i32)))
  
  (export "table" (table 0))
  
  (func $library1 (type $t)
    (i32.const 100)
  )
  
  (func $library2 (type $t)
    (i32.const 200)
  )
)