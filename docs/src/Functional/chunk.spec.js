const chunk = require('./chunk')
console.log(chunk([0, 1, 2, 3], 0)) // [0, 1, 2, 3]
console.log(chunk([0, 1, 2, 3], 1)) // [[0], [1], [2], [3]]
console.log(chunk([0, 1, 2, 3], 2)) // [[0, 1], [2, 3]]
console.log(chunk([0, 1, 2, 3], 3)) // [[0, 1, 2], [3]]
console.log(chunk([0, 1, 2, 3], 4)) // [[0, 1, 2, 3]]
console.log(chunk([0, 1, 2, 3], 5)) // [[0, 1, 2, 3]]