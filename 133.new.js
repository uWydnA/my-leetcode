const _new = (fn, ...args) => {
  let obj = {}
  obj.__proto__ = fn.prototype
  obj = fn.apply(obj, args)
  return obj
}

const Func = () => {
  console.log(11);
  return {
    name: 1,
    age: 2
  }
}
const persion1 = _new(Func)
const persion2 = _new(Func)
persion1.name = '111'
persion2.name = '222'
console.log(persion1);
console.log(persion2);
