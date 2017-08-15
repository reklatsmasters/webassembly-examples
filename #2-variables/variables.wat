(module

  ;; глобальные переменные
  (global $glob_a (mut i32) (i32.const 100))  ;; mutable
  (global $glob_b i32 (i32.const 200))        ;; immutable
  
  ;; Можно экспортировать неизменяемые глобальные переменные.
  (export "CONST_B" (global $glob_b))
  
  (func (export "local32") (result i32)
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
  
  (func (export "add10") (param $a i32) (result i32)
    ;; const b = 10
    (i32.const 10)
    (get_local $a)

    ;; return 10 + a
    (i32.add)
  )
  
  (func (export "sub10") (param $a i32) (result i32)
    ;; const b = 10
    (i32.const 10)

    ;; return 10 - a
    (i32.sub (get_local $a))
  )
  
  (func (export "add100") (param $a i32) (result i32)
    (set_global $glob_a (i32.const 300))
  
    ;; return 100 + a
    (i32.add (get_global $glob_a) (get_local $a))
  )
)