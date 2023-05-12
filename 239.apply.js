Function.prototype._apply = function (thisArg, args) {
  const fn = this
  const tag = Symbol()
  thisArg[tag] = fn
  const res = thisArg[tag](...args)
  delete thisArg[tag]
  return res
}

const hello = function (name, size, age) {
  console.log(this.name)
  console.log(name, size, age);

}

hello._apply({ name: 'zhangsan' }, [1, 2, 3])