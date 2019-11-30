const createProxy = (base, parentState = null, prop = null) => {
  const state = {
    base,
    prop,
    copy: null,
    parentState,
    revokes: parentState ? parentState.revokes : [],
    drafts: parentState ? parentState.drafts : []
  }

  const handler = {
    get (target, key) {
      const value = target.base[key]
      return typeof value === 'object' ? createProxy(value, state, key).proxy : value
    },
    set (target, key, value) {
      if (target.base[key] === value) {
        return
      }

      if (target.copy) {
        target.copy[key] = value
      } else {
        target.copy = {[key]: value}
        state.drafts.push(state)
      }
    }
  }

  const {proxy, revoke} = Proxy.revocable(state, handler)

  state.revokes.push(revoke)

  return {
    state,
    proxy
  }
}

const applyCopy = state => {
  if (state.drafts.length) {
    state.drafts.forEach(applyCopyRecursive)
    return state.copy
  }
  return state.base
}

const applyCopyRecursive = state => {
  if (state.parentState) {
    if (state.parentState.copy) {
      state.parentState.copy[state.prop] = Object.assign({}, state.base, state.copy)
    } else {
      state.parentState.copy = {
        [state.prop]: Object.assign({}, state.base, state.copy)
      }
    }
    applyCopyRecursive(state.parentState)
  } else {
    state.copy = Object.assign({}, state.base, state.copy)
  }
}

const produce = (fn) => base => {
  const {state, proxy} = createProxy(base)
  fn(proxy)
  state.revokes.forEach(fn => fn())
  return applyCopy(state)
}