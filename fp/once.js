const once = (callback) => {
  let isCalled = false
  return (...args) => {
    if (isCalled) {
      return
    }
    isCalled = true
    return callback(...args)
  }
}

const onceFn = once(console.log)
onceFn('test')
onceFn('test')
onceFn('test')
onceFn('test')