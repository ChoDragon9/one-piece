const isArray = value => Array.isArray(value)

const assign = (...obj) => Object.assign(...obj)

const shallowCopy = obj => {
  if (!canProduce(obj)) return obj
  if (isArray(obj)) return obj.concat()
  return assign({}, obj)
}

class LinkedList {
  constructor(base, parent, propName) {
    this.base = base
    this.parent = parent
    this.propName = propName
    this.copy = null
  }
  toBase() {
    return this.copy ? this.copy : this.base
  }
  changeLinkedList (propName, value) {
    const nextValue = {[propName]: value}

    this.copy ?
      assign(this.copy, nextValue) :
      assign(this, {
        copy: assign(shallowCopy(this.base), nextValue)
      })

    if (this.parent) {
      this.parent.changeLinkedList(this.propName, this.copy)
    }
  }

  static create(base, parent = null, propName = null) {
    return new LinkedList(base, parent, propName)
  }
}

const canProduce = value => {
  return value === undefined || value === null ?
    false :
    isArray(value) || typeof value === 'object'
}

class LinkedListProxy {
  constructor(base, parentState, propName) {
    this.base = base
    this.state = LinkedList.create(base, parentState, propName)
    this.children = []

    const {proxy, revoke} = this.createProxy()
    this.proxy = proxy
    this.revokeFn = revoke
  }
  getter(target, propName) {
    const value = this.state.toBase()[propName]
    return canProduce(value) ?
      this.createChildProxy(value, propName) :
      value
  }
  setter(target, propName, value) {
    this.state.changeLinkedList(propName, value)
  }
  createProxy() {
    return Proxy.revocable(this.base, {
      get: (...args) => this.getter(...args),
      set: (...args) => this.setter(...args)
    })
  }
  createChildProxy(value, propName) {
    const child = LinkedListProxy.create(value, this.state, propName)
    this.children.push(child)
    return child.proxy
  }
  revoke() {
    this.revokeFn()
    this.children.forEach(child => child.revoke())
  }
  toBase() {
    return this.state.toBase()
  }
  toProxy() {
    return this.proxy
  }
  static create(base, parentState, propName) {
    return new LinkedListProxy(base, parentState, propName)
  }
}

const produceBase = (base, fn) => {
  const linkedListProxy = LinkedListProxy.create(base)

  fn(linkedListProxy.toProxy())
  linkedListProxy.revoke()

  return linkedListProxy.toBase()
}

const produce = (fn) => (base) => {
  return canProduce(base) ? produceBase(base, fn) : base
}


module.exports = {produce}