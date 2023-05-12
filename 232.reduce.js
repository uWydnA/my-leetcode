const _reduce = function (fn, initial) {
  const arr = this
  let length = arr.length
  let prev = initial
  if (prev === undefined) {
    prev = arr[0]
    length -= 1
  }
  for (let i = 0; i < length; i++) {
    if (initial) {
      prev = fn(prev, arr[i])
    } else {
      prev = fn(prev, arr[i + 1])
    }
  }
  return prev
}

Array.prototype._reduce = _reduce

const res = [3, 6, 9]._reduce((a, b) => a + b, 8)

console.log(res, 'res');

