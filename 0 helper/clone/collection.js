const isMap = (target) => target instanceof Map
const isSet = (target) => target instanceof Set

const clone = obj => {
  if (typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(clone)
  if (isMap(obj)) return new Map(obj)
  if (isSet(obj)) return new Set(obj)
  const cloned = Object.create(Object.getPrototypeOf(obj))
  for (const key in obj) cloned[key] = clone(obj[key])
  return cloned
}

module.exports = {clone}