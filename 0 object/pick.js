const pick = (keys, obj) => keys
  .map(key => ({[key]: obj[key]}))
  .reduce((acc, obj) => Object.assign(acc, obj))

const obj = {a: 1, b: 2, c: 3}
pick(['a', 'b'], obj)
// {a: 1, b: 2}