const {clone} = require('./object-array')

const a = {
  message: 'Hello',
  inner: {
    message: 'World',
    inner: {
      message: 'World'
    }
  },
  arr: [1, 2]
}
const c = clone(a)

a.message = 'Hello World'
a.inner.message = 'Hello Earth'
a.inner.inner.message = 'Hello Earth'
a.arr.push(3)

console.group('clone')
console.log(a === c, false)
console.log(a.message === c.message, false)
console.log(a.inner.message === c.inner.message, false)
console.log(a.inner.inner.message === c.inner.inner.message, false)
console.log(...a.arr, ...c.arr, false)
console.groupEnd()

console.group('clone - primitive')
console.log(clone('string'))
console.log(clone(undefined))
console.log(clone(null))
console.log(clone(0))
console.log(clone(true))
console.log(clone(Symbol('Test')))
console.log(clone(false))
console.log(clone(NaN))
console.groupEnd()