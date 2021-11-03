/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0
  nums.forEach((item) => {
    if (item === target) count++
  })
  return count
};

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

console.log(search([5, 7, 7, 8, 8, 10], 8));
console.log(search([5, 7, 7, 8, 8, 10], 6));
