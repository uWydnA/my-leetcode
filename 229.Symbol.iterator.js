const arr = [1, 2, 3, 4]
const it = arr[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const iterable1 = {};

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

const it1 = iterable1()
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

console.log([...iterable1]);
// Expected output: Array [1, 2, 3]
