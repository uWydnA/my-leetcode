const _filter = function (fn) {
  const arr = this
  const length = arr.length
  const res = []
  for (let i = 0; i < length; i++) {
    const isMatch = fn(arr[i], i, arr)
    if (isMatch) {
      res.push(arr[i])
    }
  }
  return res
}

Array.prototype._filter = _filter

const res = [1, 2, 3, 4, 5]._filter((item) => item > 3)
console.log(res, 'res');