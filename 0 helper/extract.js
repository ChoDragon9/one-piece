const isObject = value => typeof value === 'object'

const createProxy = (state, revokes) => {
  const wrap = {
    _value: state
  }
  const handler = {
    get (target, key) {
      if (key === '_value') {
        return target._value
      }
      if (target._value === undefined) {
        return createProxy(undefined, revokes)
      }
      const value = target._value[key]
      if (value === undefined) {
        return createProxy(undefined, revokes)
      }
      return createProxy(value, revokes)
    }
  }

  const {proxy, revoke} = Proxy.revocable(wrap, handler)
  revokes.push(revoke)
  return proxy
}

const extract = (state, mapper) => {
  const revokes = []
  const proxy = createProxy(state, revokes)
  const mappedResult = mapper(proxy)

  const result = mappedResult === undefined || mappedResult._value === undefined ?
    undefined :
    mappedResult._value

  revokes.forEach(fn => fn())
  return result
}


const STEP = [
  { p: 'p', v: 'v' },
  { p: { p: 'p1', v: 'v' }, v: 'v' },
  { p: { p: { p: 'p2', v: 'v' }, v: 'v' }, v: 'v' }
]

console.group('dot')
console.log(extract(STEP[0], o => o.p), 'p')
console.log(extract(STEP[1], o => o.p.p), 'p1')
console.log(extract(STEP[2], o => o.p.p.p), 'p2')

console.log(extract(STEP[0], o => o.v), 'v')
console.log(extract(STEP[1], o => o.v), 'v')
console.log(extract(STEP[2], o => o.v), 'v')

console.log(extract(STEP[1], o => o.p.v), 'v')
console.log(extract(STEP[2], o => o.p.v), 'v')

console.log(extract(STEP[1], o => o.p.p.v), undefined)
console.log(extract(STEP[2], o => o.p.p.v), 'v')

console.log(extract(STEP[2], o => o.p.p.p.v), undefined)
console.groupEnd()

console.group('undefined - leaf')
console.log(extract(STEP[0], o => o.p1), undefined)
console.log(extract(STEP[1], o => o.p.p1), undefined)
console.log(extract(STEP[2], o => o.p.p.p1), undefined)
console.groupEnd()

console.group('undefined - middle')
console.log(extract(STEP[1], o => o.p1.p), undefined)
console.log(extract(STEP[2], o => o.p.p1.p), undefined)
console.log(extract(STEP[2], o => o.p1.p.p), undefined)
console.groupEnd()

console.group('attack')
console.log(extract(STEP[1], o => {
  o._value = { test: '' }
  return o.test
}), undefined)
console.groupEnd()