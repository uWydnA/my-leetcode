Function.prototype._call = function (context, ...args) {
  console.log(this);
  if (context !== null) {
    let key = Symbol('key')
    context[key] = this;
    let result = context[key](...args);
    delete context[key];
    return result;
  } else {
    this(...args)
  }
}

const obj = { body: [123123123123] }

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product._call(this, name, price);
  this.category = 'food';
}
const food = new Food('cheese', 5)

console.log(food);
// expected output: "cheese"
