// fun [] ++ ys = ys
//   | (x :: xs) ++ ys = x :: (xs ++ ys)
const cons = ([x, ...lest], ys) => {
  return x === undefined ?
    ys :
    [x, ...cons(lest, ys)]
}
// val xs = [0, 1, 2]
// val ys = [3, 4, 5]
// val zs = xs ++ ys;
const xs = [0, 1, 2]
const ys = [3, 4, 5]
const zs = cons(xs, ys)

console.log(xs)
console.log(ys)
console.log(zs)