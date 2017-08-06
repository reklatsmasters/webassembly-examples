;; Этот пример показывает простую функцию сложения двух параметров,
;; а также различные возможности определения функции.
(module
  (export "add1" (func $add1))
  (export "add2" (func $add2))

  (type $add_t (func (param i32 i32) (result i32)))

  ;; const result = add1(a, b)
  (func $add1 (param $a i32) (param $b i32) (result i32)
    ;; return a + b
    (i32.add
      (get_local $a)
      (get_local $b)
    )
  )
  
  ;; const result = add2(a, b)
  (func $add2 (param i32) (param i32) (result i32)
    ;; return a + b
    (i32.add
      (get_local 0)
      (get_local 1)
    )
  )
  
    ;; const result = add3(a, b)
  (func (export "add3") (type $add_t)
    (get_local 0)
    (get_local 1)
    (i32.add)
  )
)