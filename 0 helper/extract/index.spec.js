const {extract} = require('./index')
const test = (a, b) => console.log(a === b, a, b)

const STEP = [
  { p: 'p', v: 'v' },
  { p: { p: 'p1', v: 'v' }, v: 'v' },
  { p: { p: { p: 'p2', v: 'v' }, v: 'v' }, v: 'v' },
  { n: null },
]

console.group('dot')
test(extract(STEP[0], o => o.p), 'p')
test(extract(STEP[1], o => o.p.p), 'p1')
test(extract(STEP[2], o => o.p.p.p), 'p2')
test(extract(STEP[3], o => o.n), null)
test(extract(STEP[3], o => o.n.p), undefined)

test(extract(STEP[0], o => o.v), 'v')
test(extract(STEP[1], o => o.v), 'v')
test(extract(STEP[2], o => o.v), 'v')

test(extract(STEP[1], o => o.p.v), 'v')
test(extract(STEP[2], o => o.p.v), 'v')

test(extract(STEP[1], o => o.p.p.v), undefined)
test(extract(STEP[2], o => o.p.p.v), 'v')

test(extract(STEP[2], o => o.p.p.p.v), undefined)
console.groupEnd()

console.group('undefined - leaf')
test(extract(STEP[0], o => o.p1), undefined)
test(extract(STEP[1], o => o.p.p1), undefined)
test(extract(STEP[2], o => o.p.p.p1), undefined)
console.groupEnd()

console.group('undefined - middle')
test(extract(STEP[1], o => o.p1.p), undefined)
test(extract(STEP[2], o => o.p.p1.p), undefined)
test(extract(STEP[2], o => o.p1.p.p), undefined)
console.groupEnd()

console.group('attack')
test(extract(STEP[1], () => 1), 1)
test(extract(STEP[1], o => o.p.p.p.p.p.p.p), undefined)
console.groupEnd()