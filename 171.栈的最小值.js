
// 请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。


// 示例：

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.

// pop()：正常弹出顶部元素
// top()：正常获取顶部元素
// push()：每次push的是一个对象，对象上有两个属性：val和min。val就是当前元素的值，min是当前栈中的最小值。每次push()，相应的min都重新计算，保证栈顶元素的min属性，一直都是最小值。
// 若栈空，min就是val
// 若栈不空，min是栈顶元素的min属性和当前val的较小者
// getMin()：返回栈顶元素的min属性即可，为常数时间。


/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stackA = []
  this.stackB = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stackA.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stackA.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */