const {safe} = require('./index')
const test = (a, b) => console.log(a === b)

const STEP = [
  { p: 'p', v: 'v' },
  { p: { p: 'p1', v: 'v' }, v: 'v' },
  { p: { p: { p: 'p2', v: 'v' }, v: 'v' }, v: 'v' }
]

console.group('dot')
test(safe(STEP[0], o => o.p), 'p')
test(safe(STEP[1], o => o.p.p), 'p1')
test(safe(STEP[2], o => o.p.p.p), 'p2')

test(safe(STEP[0], o => o.v), 'v')
test(safe(STEP[1], o => o.v), 'v')
test(safe(STEP[2], o => o.v), 'v')

test(safe(STEP[1], o => o.p.v), 'v')
test(safe(STEP[2], o => o.p.v), 'v')

test(safe(STEP[1], o => o.p.p.v), undefined)
test(safe(STEP[2], o => o.p.p.v), 'v')

test(safe(STEP[2], o => o.p.p.p.v), undefined)
console.groupEnd()

console.group('undefined - leaf')
test(safe(STEP[0], o => o.p1), undefined)
test(safe(STEP[1], o => o.p.p1), undefined)
test(safe(STEP[2], o => o.p.p.p1), undefined)
console.groupEnd()

console.group('undefined - middle')
test(safe(STEP[1], o => o.p1.p), undefined)
test(safe(STEP[2], o => o.p.p1.p), undefined)
test(safe(STEP[2], o => o.p1.p.p), undefined)
console.groupEnd()

console.group('attack')
test(safe(STEP[1], o => {
  o._value = { test: '' }
  return o.test
}), undefined)
console.groupEnd()