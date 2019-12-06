const isObject = value => typeof value === 'object'
const symbol = Object.freeze({})

const createProxy = (state, revokes) => {
  const handler = {
    get (target, key) {
      const value = target[key]
      return value === undefined ?
        symbol :
          isObject(value) ?
          createProxy(value, revokes) :
          value
    }
  }

  const {proxy, revoke} = Proxy.revocable(state, handler)
  revokes.push(revoke)
  return proxy
}

const extract = (state, mapper) => {
  const revokes = []
  const proxy = createProxy(state, revokes)
  const result = mapper(proxy)

  revokes.forEach(fn => fn())
  return result === symbol ? undefined : result
}


const STEP = [
  { p: 'p' },
  { p: { p: 'p1' } },
  { p: { p: { p: 'p2' } } }
]
console.group('dot')
console.log(extract(STEP[0], o => o.p), 'p')
console.log(extract(STEP[1], o => o.p.p), 'p1')
console.log(extract(STEP[2], o => o.p.p.p), 'p2')
console.groupEnd()

console.group('undefined - leaf')
console.log(extract(STEP[0], o => o.p1), undefined)
console.log(extract(STEP[1], o => o.p.p1), undefined)
console.log(extract(STEP[2], o => o.p.p.p1), undefined)
console.groupEnd()

console.group('undefined - middle')
console.log(extract(STEP[1], o => o.p1.p), undefined)
console.log(extract(STEP[2], o => o.p.p1.p), undefined)
console.groupEnd()