const toLinkedListItem = (base, parent = null, propName = null) => {
  return {
    base,
    parent,
    propName,
    copy: null,
  }
}

const toBase = (state) => {
  return state.copy ? state.copy : state.base
}

const assign = (...obj) => Object.assign(...obj)

const shallowCopy = obj => {
  if (Array.isArray(obj)) return obj.concat()
  return Object.assign({}, obj)
}

const changeLinkedList = (state, propName, value) => {
  const nextValue = {[propName]: value}

  state.copy ?
    assign(state.copy, nextValue) :
    assign(state, {
      copy: assign(shallowCopy(state.base), nextValue)
    })

  if (state.parent) {
    changeLinkedList(state.parent, state.propName, state.copy)
  }
}

const createProxy = (base, revokes, parentState, propName) => {
  const state = toLinkedListItem(base, parentState, propName)
  const handler = {
    get (target, key) {
      const value = toBase(state)[key]
      if (typeof value === 'object') {
        const {proxy} = createProxy(value, revokes, state, key)
        return proxy
      } else {
        return value
      }
    },
    set (target, key, value) {
      changeLinkedList(state, key, value)
    }
  }

  const {proxy, revoke} = Proxy.revocable(base, handler)
  revokes.push(revoke)
  return {proxy, revoke, revokes, state}
}

const produce = (fn) => (base) => {
  const {proxy, revokes, state} = createProxy(base, [])

  fn(proxy)
  revokes.forEach(fn => fn())

  return toBase(state)
}