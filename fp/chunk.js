const chunk = (arr, size) => {
  if (!size) {
    return arr
  }
  const length = Math.ceil(arr.length / size)
  const newArr = Array.from({length}, () => [])
  arr.forEach((value, index) => {
    const newArrIndex = Math.floor(index / size)
    newArr[newArrIndex].push(value)
  })
  return newArr
}

module.exports = chunk