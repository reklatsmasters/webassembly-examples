(module

  ;; global variables
  (global $glob_a (mut i32) (i32.const 100))  ;; mutable
  (global $glob_b i32 (i32.const 200))        ;; immutable
  
  ;; Immutable global variable can be exported.
  (export "CONST_B" (global $glob_b))
  
  (func (export "local32") (result i32)
    ;; Local variables initialized with 0 by default.
    ;;
    ;; let sum
    (local $sum i32)
    
    ;; return sum
    (return (get_local $sum))
  )
  
  (func (export "local64") (result i64)
    ;; let sum
    (local $sum i64)
    
    ;; return sum
    (return (get_local $sum))
  )
  
  ;; Function arguments taken from stack.
  (func (export "add10") (param $a i32) (result i32)
    ;; const _ = 10
    (i32.const 10)
    (get_local $a)

    ;; return 10 + a
    (i32.add)
  )

  ;; This example shows the mixed order of the call arguments.
  (func (export "sub10") (param $a i32) (result i32)
    ;; const _ = 10
    (i32.const 10)

    ;; return 10 - a
    (i32.sub (get_local $a))
  )

  ;; Usage of global and local variables together.
  (func (export "add100") (param $a i32) (result i32)
    ;; glob_a = 300
    (set_global $glob_a (i32.const 300))
  
    ;; return 300 + a
    (i32.add (get_global $glob_a) (get_local $a))
  )
)