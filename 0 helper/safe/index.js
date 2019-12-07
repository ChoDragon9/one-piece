const symbol = Symbol('safe')
const pack = value => ({ [symbol]: value })
const unpack = pack => pack[symbol]

const createProxy = (state, revokes) => {
  const wrap = pack(state)
  const handler = {
    get (target, key) {
      const unpacked = unpack(target)
      switch (true) {
        case key === symbol:
          return unpacked
        case unpacked === undefined || unpacked[key] === undefined:
          return createProxy(undefined, revokes)
        default:
          return createProxy(unpacked[key], revokes)
      }
    }
  }

  const {proxy, revoke} = Proxy.revocable(wrap, handler)
  revokes.push(revoke)
  return proxy
}

const safe = (state, mapper) => {
  const revokes = []
  const proxy = createProxy(state, revokes)
  const mappedResult = mapper(proxy)

  const result = mappedResult === undefined || unpack(mappedResult) === undefined ?
    undefined :
    unpack(mappedResult)

  revokes.forEach(fn => fn())
  return result
}

module.exports = {safe}