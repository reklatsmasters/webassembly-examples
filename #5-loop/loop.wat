(module
  (memory (export "memory") 1)

  (func (export "upper") (param $length i32)
    ;; var i = 0
    (local $i i32)
    (local $sym i32)

    (block $break
      ;; while(true)
      (loop $continue
        ;; if (i >= length) break
        (br_if $break (i32.ge_u (get_local $i) (get_local $length)))
        ;; sym = $memory[i]
        (set_local $sym (i32.load8_u (get_local $i)))
        
        ;; if (sym >= 97 && sym <= 122)
        (if (i32.ge_u (get_local $sym) (i32.const 97))
          (if (i32.le_u (get_local $sym) (i32.const 122))
            ;; $memory[i] = sym - 32
            (i32.store8 (get_local $i) (i32.sub (get_local $sym) (i32.const 32)))
          )
        )

        ;; ++i
        (set_local $i (i32.add (get_local $i) (i32.const 1)))
        ;; continue
        (br $continue)
      )
    )
  )
)