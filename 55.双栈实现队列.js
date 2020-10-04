var CQueue = function () {
  // 1、设置两个栈  堆是 stack
  this.warehouse1 = [];
  this.warehouse2 = [];
};
// 2、写一个函数实现 队列尾插入整数
// 为啥写出了prototype?   指的是从原型链出发
// 将value 压入 第一个栈 warehouse1中
CQueue.prototype.appendTail = function (value) {
  this.warehouse1.push(value);
};
CQueue.prototype.deleteHead = function () {
  if(this.warehouse2.length) return this.warehouse2.pop()
  if (this.warehouse1.length === 0) return -1
  while (this.warehouse1.length > 0) {
    this.warehouse2.push(this.warehouse1.pop())
  }
  return this.warehouse2.pop()
};
