const isPrimitive = value => {
  switch (true) {
    case value === undefined:
    case value === null:
      return true
    case typeof value === 'object':
    case typeof value === 'function':
    case Number.isNaN(value):
      return false
    default:
      return true
  }
}

console.group('isPrimitive')
console.log(isPrimitive('string'), true, 'string')
console.log(isPrimitive(undefined), true, undefined)
console.log(isPrimitive(null), true, null)
console.log(isPrimitive(0), true, 0)
console.log(isPrimitive(true), true, true)
console.log(isPrimitive(Symbol('Test')), true, Symbol('Test'))
console.log(isPrimitive(false), true, false)
console.log(isPrimitive(NaN), false, NaN)
console.log(isPrimitive({}), false, {})
console.log(isPrimitive([]), false, [])
console.log(isPrimitive(()=>{}), false, ()=>{})
console.log(isPrimitive(new Set()), false, new Set())
console.log(isPrimitive(new Map()), false, new Map())
console.groupEnd()