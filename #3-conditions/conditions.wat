(module
  (func (export "greather") (param $a i32) (param $b i32) (result i32)
    ;; return a > b ? a : b
    (select
      (get_local $a)
      (get_local $b)
      (i32.gt_s
        (get_local $a)
        (get_local $b)
      )
    )
  )
  
  (func (export "greather2") (param $a i32) (param $b i32) (result i32)
    ;; if (a > b)
    (if (i32.gt_s (get_local $a) (get_local $b))
      (return (i32.add (get_local $a) (i32.const 1)))
    )

    ;; return sum
    (return (get_local $b))
  )
  
  (func (export "greather10") (param $a i32) (result i32)
    ;; if (a > 10)
    (if (i32.gt_s (get_local $a) (i32.const 10))
      ;; явно добавляем блок then для обработки нескольких инструкций
      (then
        (set_local $a (i32.add (get_local $a) (i32.const 1)))

        (return (get_local $a))
      )
    )

    ;; return sum
    (return (i32.const 10))
  )
)