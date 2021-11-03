/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let res = nums[i]
    let count = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      res += nums[j]
      if (res >= count) {
        count = res
      }
    }
    if (count > result) {
      result = count
    }
  }
  return result
};

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, 1]));