const canClone = (obj) => typeof obj === 'object'

const clone = obj => {
  if (!canClone(obj)) return obj
  if (Array.isArray(obj)) return obj.map(clone)
  const cloned = Object.create(Object.getPrototypeOf(obj))
  for (const key in obj) {
    cloned[key] = clone(obj[key])
  }
  return cloned
}

module.exports = {clone}