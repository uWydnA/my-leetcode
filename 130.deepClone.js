const isObject = (obj) => typeof obj !== 'object' || obj == null
const deepClone = (obj) => {
  if (isObject(obj)) {
    return obj
  }
  let copy = {}
  if (Array.isArray(obj)) {
    copy = []
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key])
    }
  }
  return copy
}
const demoObj1 = { name: { age: 14, key: 'demoObj1' } }
const demoObj2 = { name: { age: 22, key: 'demoObj2' } }
const demo2 = [demoObj1, demoObj2]
console.log(deepClone(demo2) === demo2);
console.log(deepClone(demo2)[0] === demoObj1);
console.log(deepClone(demo2)[1] === demoObj2);