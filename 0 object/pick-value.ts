const pickValue = function <T, K extends keyof T>(key: K, obj: T) {
  return obj[key]
}

const obj = {a: 1, b: 2, c: 3}
console.log(pickValue('a', obj))
// 1
console.log(pickValue('b', obj))
// 2