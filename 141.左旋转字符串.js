/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n)
};

// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"
// 示例 2：

// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"


console.log(reverseLeftWords('abcdefg', 2));
console.log(reverseLeftWords('lrloseumgh', 6));