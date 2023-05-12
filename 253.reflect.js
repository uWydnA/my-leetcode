const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function () {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

console.log(Reflect.has(duck, 'color'));
// true
console.log(Reflect.has(duck, 'haircut'));
// false

console.log(Reflect.ownKeys(duck), 'ownKeys');