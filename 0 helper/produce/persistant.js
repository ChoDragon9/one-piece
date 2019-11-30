const produce = (fn) => base => {
  const revokes = []
  let sharedState = null

  const createProxy = (state) => {
    const handler = {
      get (target, key) {
        return sharedState ? sharedState[key] : target[key]
      },
      set (target, key, value) {
        const newValue = {[key]: value}
        if (sharedState) {
          Object.assign(sharedState, newValue)
        } else {
          sharedState = Object.assign({}, state, newValue)
        }
      }
    }

    const {proxy, revoke} = Proxy.revocable(state, handler)
    revokes.push(revoke)
    return proxy
  }

  const proxy = createProxy(base)

  fn(proxy)
  revokes.forEach(fn => fn())

  return sharedState ? sharedState : base
}