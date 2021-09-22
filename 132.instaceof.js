const _instanceof = (target, obj) => {
  if (target.__proto__ === null) return false
  if (target.__proto__ === obj.prototype) {
    return true
  } else {
    return _instanceof(target.__proto__, obj)
  }
}

class Persion {

}
const persion = new Persion()

console.log(_instanceof(persion, Persion));