const symbol = Symbol('safe')
const pack = value => ({ [symbol]: value })
const unpack = pack => pack[symbol]
const isPack = pack => typeof pack === 'object' && symbol in pack

const extract = (state, mapper) => {
  const revokes = []
  const proxy = createProxy(state, revokes)
  const mappedResult = mapper(proxy)
  const result = isPack(mappedResult) ? unpack(mappedResult) : mappedResult

  revokes.forEach(fn => fn())
  return result
}

const createProxy = (state, revokes) => {
  const wrap = pack(state)
  const handler = trap(revokes)
  const {proxy, revoke} = Proxy.revocable(wrap, handler)
  revokes.push(revoke)
  return proxy
}

const trap = (revokes) => {
  return {
    get (target, key) {
      const unpacked = unpack(target)
      return key === symbol ?
        unpacked :
        createProxy(unpacked === undefined ? undefined : unpacked[key], revokes)
    }
  }
}

module.exports = {extract}