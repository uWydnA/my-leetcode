let flat = (arr) => {
  return arr.length ? arr.reduce((prev, next) => prev.concat(Array.isArray(next) ? flat(next) : next), []) : []
}
console.log(`flat`, flat([1, 2, [3,5,[1,2,3,[4,5]]], 4]));