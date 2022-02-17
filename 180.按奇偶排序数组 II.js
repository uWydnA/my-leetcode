// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。



// 示例：

// 输入：[4, 2, 5, 7]
// 输出：[4, 5, 2, 7]
// 解释：[4, 7, 2, 5]，[2, 5, 4, 7]，[2, 7, 4, 5] 也会被接受。



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const ji = nums.filter(item => Boolean(item % 2))
  const ou = nums.filter(item => !Boolean(item % 2))
  const result = []
  const len = ji.length > ou.length ? ji.length : ou.length
  for (let i = 0; i <= len * 2; i++) {
    if (i % 2 !== 0) {
      const target = ji.pop()
      if (target != null) {
        result.push(target)
      }
    } else {
      const target = ou.pop()
      if (target != null) {
        result.push(target)
      }
    }
  }
  return result
};

console.log(sortArrayByParityII([1, 1, 0, 4]));