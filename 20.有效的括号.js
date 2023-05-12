/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const target = { '{': "}", "[": "]", "(": ")" }
  const length = s.length
  const stack = [s[0]]
  for (let i = 1; i < length; i++) {
    if (target[stack[stack.length - 1]] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  const isVaild = stack.length === 0
  return isVaild
};
// @lc code=end

