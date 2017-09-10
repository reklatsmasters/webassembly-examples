const LinkedList = require('./linked-list-wrap')

const ll = new LinkedList()

console.log('LinkedList created!')
console.log('(before) length =', ll.length)

ll.push('one')
ll.push('two')
ll.push('three')

console.log('(after) length =', ll.length)

for(const node of ll) {
  console.log('item of ll -> %s', node)
}

ll.clear()
console.log('(after clear) length =', ll.length)
