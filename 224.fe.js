const fn = (x) => {
  if (x === 0) return 0
  if (x === 1) return 1
  return fn(x - 1) + fn(x - 2)
}

const fn2 = (x) => {
  if (x === 0) return 0
  if (x === 1) return 1
  let res = [0, 1]
  let count = 1
  while (count < x) {
    const len = res.length
    const q = res[len - 1] + res[len - 2]
    res.push(q)
    count++
  }
  return res[res.length - 1]
}
console.log(fn(20));
console.log(fn2(20));