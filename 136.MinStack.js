var MinStack = function () {
  this.arr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return [...this.arr].sort((a, b) => a - b)[0]
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
// 返回 - 3.
console.log(minStack.min());;
minStack.pop();
// 返回 0.
console.log(minStack.top());;
// 返回 - 2.
console.log(minStack.min());;
