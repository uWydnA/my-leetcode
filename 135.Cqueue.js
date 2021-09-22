var CQueue = function () {
  this.queueOne = []
  this.queueTwo = []
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function (value) {
  this.queueOne.push(value)

};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function () {
  if (!this.queueTwo.length) {
    if (!this.queueOne.length) return -1;
    while (this.queueOne.length) {
      this.queueTwo.push(this.queueOne.pop());
    }
  }
  return this.queueTwo.pop()

};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/
const obj = new CQueue()
obj.appendTail(1)
const param_2 = obj.deleteHead()
console.log(param_2, 'param_2');