/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length
  if (len === 0) return 0
  let result = 1
  let isBreakAll = false
  for (let i = 0; i < s.length && !isBreakAll; i++) {
    let res = 1
    let isBreak = false
    let str = s[i]
    const LessLength = len - (i + 1)
    if (LessLength <= result) {
      isBreakAll = true
    }
    for (let j = i + 1; j < s.length && !isBreak; j++) {
      const target = s[j]
      if (!new RegExp(target).test(str)) {
        str += target
        res++
      } else {
        isBreak = true
      }
    }
    if (res > result) {
      result = res
    }
  }
  return result
};

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));