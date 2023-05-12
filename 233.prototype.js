function A() {
  this.a = true
}
A.prototype.getA = function () {
  return this.a
}

function B() {
  this.b = false
}

B.prototype = new A()

B.prototype.getB = function () {
  return this.b
}

const instance = new B()

console.log(instance.a);
console.log(instance instanceof Object);
console.log(instance instanceof A);
console.log(instance instanceof B);