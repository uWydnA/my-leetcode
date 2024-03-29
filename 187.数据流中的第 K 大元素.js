// 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

// 请实现 KthLargest 类：

// KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
// int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。


// 示例：

// 输入：
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// 输出：
// [null, 4, 5, 5, 8, 8]

// 解释：
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  nums.sort((a, b) => b - a)
  this.nums = nums
  this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.nums.push(val)
  this.nums.sort((a, b) => b - a)
  return this.nums[this.k - 1]
};


const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));;   // return 4
console.log(kthLargest.add(5));;   // return 5
console.log(kthLargest.add(10));;  // return 5
console.log(kthLargest.add(9));;   // return 8
console.log(kthLargest.add(4));;   // return 8
