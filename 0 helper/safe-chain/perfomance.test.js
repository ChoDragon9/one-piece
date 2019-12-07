const {safeChain} = require('./index')
const run = (fn, len, name) => {
  const obj = {
    num: 100000000,
    str: 'qwertyuiopsdfghjklzxcvbnm',
    message: 'Hello',
    inner: {
      num: 100000000,
      str: 'qwertyuiopsdfghjklzxcvbnm',
      message: 'Hello',
      inner: {
        num: 100000000,
        str: 'qwertyuiopsdfghjklzxcvbnm',
        message: 'Hello',
        inner: {
          num: 100000000,
          str: 'qwertyuiopsdfghjklzxcvbnm',
        },
      },
    },
  }
  const start = Date.now()
  for (let i = 0; i < len; i++) {
    fn(obj)
  }
  console.log(name, Date.now() - start)
}

const arr = [
  10,
  1000,
  1000000
]

const callback = obj => obj.inner.inner.inner.str

arr.forEach((len) => {
  console.group(len)
  run((obj) => safeChain(obj, callback), len, 'safeChain')
  run(callback, len, 'callback')
  console.groupEnd()
})


