const clone = obj => JSON.parse(JSON.stringify(obj))

const a = {}
const b = a
const c = clone(a)

console.log(a === b)
// true
console.log(a === c)
// false