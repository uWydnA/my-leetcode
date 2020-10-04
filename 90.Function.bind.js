Function.prototype._bind = function (obj, arg) {
  const context = this
  return function () {
    return context.apply(obj, [arg, ...arguments])
  }
}
let myFunc = function (c) {
  const result = this.a + this.b + c
  return result
}
let obj = {
  a: 1,
  b: 2
}
let nowFunc = myFunc._bind(obj, 3)
console.log(nowFunc());