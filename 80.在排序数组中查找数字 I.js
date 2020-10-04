/**
 * 统计一个数字在排序数组中出现的次数。

  示例 1:

  输入: nums = [5,7,7,8,8,10], target = 8
  输出: 2
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return nums.filter((val)=>val === target).length

};
console.log(`search`, search([5,7,7,8,8,10],8));