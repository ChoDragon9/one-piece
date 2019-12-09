const compare = () => 0.5 - Math.random()
const shuffle = arr => arr.slice().sort(compare)

module.exports = shuffle