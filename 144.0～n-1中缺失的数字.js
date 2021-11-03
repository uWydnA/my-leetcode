/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let target = undefined
  const len = nums.length
  if (len === 1 && nums[0] === 0) return 1
  nums.some((item, index) => {
    if (len === index + 1 && item !== len) {
      target = len
      return true
    }
    if (item !== index) {
      target = index
      return true
    } else {
      return false
    }
  })
  return target
};

// 输入: [0,1,3]
// 输出: 2
// 示例 2:

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

console.log(missingNumber([0, 1, 3]));
console.log(missingNumber([0]));
console.log(missingNumber([1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));