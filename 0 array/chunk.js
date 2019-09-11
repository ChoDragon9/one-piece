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

console.log(chunk([0, 1, 2, 3], 0)) // [0, 1, 2, 3]
console.log(chunk([0, 1, 2, 3], 1)) // [[0], [1], [2], [3]]
console.log(chunk([0, 1, 2, 3], 2)) // [[0, 1], [2, 3]]
console.log(chunk([0, 1, 2, 3], 3)) // [[0, 1, 2], [3]]
console.log(chunk([0, 1, 2, 3], 4)) // [[0, 1, 2, 3]]
console.log(chunk([0, 1, 2, 3], 5)) // [[0, 1, 2, 3]]