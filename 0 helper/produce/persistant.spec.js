const test = (message, fn) => {
  console.group(message)
  fn()
  console.groupEnd()
}

test('프로퍼티 변경 시 주소가 변경된다.', () => {
  const baseState = {
    done: false
  }

  const nextState = produce((draft) => {
    draft.done = true
  })(baseState)

  console.log(baseState !== nextState)
  console.log(baseState.done !== nextState.done)
})
test('변경하지 않는 객체는 변경되면 안된다.', () => {
  const baseState = {
    done: false,
    inner: {
      done: false,
    }
  }

  const nextState = produce((draft) => {
    draft.done = true
  })(baseState)

  console.log(baseState.inner === nextState.inner)
})
test('객체 변경 시, 새로운 객체가 만들어진다.', () => {
  const baseState = {
    done: false,
    inner: {
      done: false,
    }
  }

  const nextState = produce((draft) => {
    draft.inner.done = true
  })(baseState)

  console.log(baseState.done === nextState.done)
  console.log(baseState.inner !== nextState.inner)
})
test('객체 변경 시, 새로운 객체가 만들어진다. - 프로퍼티 두개일 때', () => {
  const baseState = {
    done: false,
    inner: {
      txt: 'Text',
      done: false,
    }
  }

  const nextState = produce((draft) => {
    draft.inner.done = true
  })(baseState)

  console.log(baseState.done === nextState.done)
  console.log(baseState.inner !== nextState.inner)
  console.log(baseState.inner.txt === nextState.inner.txt)
})
test('변경하지 않는 객체는 변경되면 안된다.', () => {
  const baseState = {
    done: false,
    inner: {
      txt: 'Text',
      done: false,
    },
    inner2: {
      txt: 'Text',
      done: false,
    }
  }

  const nextState = produce((draft) => {
    draft.inner.txt = 'Hello'
  })(baseState)

  console.log(baseState.inner2 === nextState.inner2)
})
test('변경하지 않는 객체는 변경되면 안된다. - 깊은 객체', () => {
  const baseState = {
    done: false,
    inner: {
      txt: 'Text',
      done: false,
    },
    inner2: {
      txt: 'Text',
      done: false,
      inner: {
        inner: {
          txt: 'Text',
          done: false,
        },
        inner2: {
          txt: 'Text',
          done: false,
        }
      }
    }
  }

  const nextState = produce((draft) => {
    draft.inner2.inner.inner.txt = 'Hello'
  })(baseState)

  console.log(baseState.inner === nextState.inner)
  console.log(baseState.inner2.inner.inner2 === nextState.inner2.inner.inner2)
})
test('변경이 원하는 값은 모두 정상적으로 변경되야 한다.', () => {
  const baseState = {
    done: false,
    inner: {
      txt: 'Text',
      done: false,
    },
    inner2: {
      txt: 'Text',
      done: false,
      inner: {
        inner: {
          txt: 'Text',
          done: false,
        },
        inner2: {
          txt: 'Text',
          done: false,
        }
      }
    }
  }

  const nextState = produce((draft) => {
    draft.done = true
    draft.inner2.txt = 'Hello1'
    draft.inner2.inner.inner.done = true
    draft.inner2.inner.inner2.done = true
    draft.inner2.inner.inner2.txt = 'Hello World'
  })(baseState)

  console.log(nextState.done === true)
  console.log(nextState.inner2.txt === 'Hello1')
  console.log(nextState.inner2.inner.inner.done === true)
  console.log(nextState.inner2.inner.inner2.done === true)
  console.log(nextState.inner2.inner.inner2.txt === 'Hello World')

  console.log(nextState)
})