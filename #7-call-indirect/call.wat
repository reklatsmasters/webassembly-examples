;; This example shows the way to change export table.
(module
  (table anyfunc (elem $internal_function$1 $internal_function$2))

  (type $type_t (func (result i32)))

  (export "table" (table 0))
  (export "main" (func $public_function))
  
  (global $i (mut i32) (i32.const -1))

  ;; public exported function
  (func $public_function (type $type_t)
    ;; change ptr to internal function.
    ;; ++i
    (set_global $i (i32.add (get_global $i) (i32.const 1)))
    
    ;; if (i > 1) i = 0
    (if (i32.gt_u (get_global $i) (i32.const 1))
      (set_global $i (i32.const 0))
    )

    ;; proxy to internal function
    ;; use dynamic linking
    (call_indirect $type_t (get_global $i))
  )

  (func $internal_function$1 (type $type_t)
    (i32.const 10)
  )

  (func $internal_function$2 (type $type_t)
    (i32.const 20)
  )
)