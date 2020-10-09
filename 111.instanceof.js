function _instanceof(target, func) {
  while (func.prototype !== null) {
    let right = func.prototype
    if (right == null) return false
    if (target.__proto__ === right) return true
    func = right
  }
}
let data = [1]
console.log(_instanceof(data, Array));