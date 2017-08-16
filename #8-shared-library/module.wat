;; Main module. We use use dynamic linking to call
;; imported functions.
(module
  (import "ns" "table" (table 0 anyfunc))
  
  (type $t (func (result i32)))
  
  (export "main" (func $main))
  
  (func $main (param $num i32) (result i32)
    (call_indirect $t (get_local $num))
  )
)