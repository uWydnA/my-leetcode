const deepClone = (target, map = new Map()) => {
  if (typeof target !== 'object') return target
  if (map.get(target)) {
    return map.get(target)
  }
  let result = {}
  map.set(target, result)
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      result[key] = deepClone(target[key], map)
    }
  }
  return result
}
const target = { name: { age: { number: 12 } } }

const obj = deepClone(target)
console.log(obj, 'obj');

console.log(target === obj);