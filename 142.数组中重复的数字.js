/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let res = new Map()
  let target = undefined
  nums.some(item => {
    if (res.get(item) == null) {
      res.set(item, item)
      return false
    } else {
      target = item
      return true
    }
  })
  return res.get(target)
};
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));