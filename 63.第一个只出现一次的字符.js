/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

  示例:

  s = "abaccdeff"
  返回 "b"

  s = "" 
  返回 " "

 */
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let res = s.split('')
  const result = res.filter((val) => res.indexOf(val) === res.lastIndexOf(val))[0]
  return result?result:' '
};
console.log(`firstUniqChar`, firstUniqChar('abaccdeff'));