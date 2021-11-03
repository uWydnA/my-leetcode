/**
 * @param {number} num
 * @return {number}
 */
let translateNum = (num) => {
  let nums = num.toString()
  let n = nums.length
  let dp = new Array(n)
  dp[0] = 1
  for (let i = 1; i < n; i++) {
    console.log(nums[i - 1], nums[i]);
    if (nums[i - 1] == '2' && nums[i] < '6') {
      dp[i] = dp[i - 1] + (i > 2 ? dp[i - 2] : 1)
    }
    else if (nums[i - 1] == '1') {
      dp[i] = dp[i - 1] + (i > 2 ? dp[i - 2] : 1)
    } else {
      dp[i] = dp[i - 1]
    }
  }
  console.log(dp, 'dp');
  return dp[n - 1]
}



// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

console.log(translateNum('12258'));
// console.log(translateNum('25'));
// console.log(translateNum('26'));