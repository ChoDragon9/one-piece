const createProxy = base => {
  const state = {
    base,
    copy: null
  }

  const handler = {
    get (target, key) {
      return target.base[key]
    },
    set (target, key, value) {
      if (target.base[key] === value) {
        return
      }
      target.copy ?
        target.copy[key] = value :
        target.copy = {[key]: value}
    }
  }

  return {
    state,
    proxy: new Proxy(state, handler)
  }
}

const applyCopy = state => {
  return state.copy ? Object.assign({}, state.base, state.copy) : obj
}

const produce = (fn) => base => {
  const {state, proxy} = createProxy(base)
  fn(proxy)
  return applyCopy(state)
}

const baseState = {
  todo: "Try immer",
  done: false
}

const nextState = produce((draft) => {
  draft.todo = 'Try immer'
  draft.done = true
})(baseState)

console.log(baseState === nextState)