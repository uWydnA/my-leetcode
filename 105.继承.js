function Parent(x, y) {
  this.x = x
  this.y = y
}
Parent.prototype.add = function () {
  return this.x + this.y
}
let child = new Parent(1, 2)
console.log(child.add());

class classParent {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add() {
    return this.x + this.y
  }
}
let classChild = new classParent(3, 4)
console.log(classChild.add());
class Animal {
  constructor(name) {
    this.name = name
  }
  eat() {
    return `${this.name} is animal`
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name)
    this.name = name
  }
  wang() {
    return `${this.name} is dog`
  }
}
let dogger = new Dog('byteDance')
console.log(dogger.eat());