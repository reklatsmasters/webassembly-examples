const instance = require('./loop')()
const wasm = instance.exports

// Создаём обёртку для wasm функции,
// которая включает операции
// загрузки / чтения памяти
function upper(s) {
  const buf = Buffer.from(s)
  const lenght = buf.length

  instance.memory.set(buf)
  wasm.upper(lenght)
  
  return Buffer.from(instance.memory).slice(0, lenght).toString('ascii')
}

const test_str = 'vSeM pRiVeTiK v EtoM cHaTiKe :)'
console.log('upper "%s" -> "%s"', test_str, upper(test_str))