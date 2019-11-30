const clone = obj => {
  if (typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(clone)
  const cloned = Object.create(Object.getPrototypeOf(obj))
  for (const key in obj) {
    cloned[key] = clone(obj[key])
  }
  return cloned
}

module.exports = {clone}