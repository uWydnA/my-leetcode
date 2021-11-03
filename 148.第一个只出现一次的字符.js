/**
 * @param {string} s
 * @return {character}
 */

var firstUniqChar = function (s) {
  let target = ' '
  let map = {}
  for (let i = 0; i < s.length; i++) {
    const word = s[i]
    if (map[word] != null) {
      map[word] = 0
    } else {
      map[word] = 1
    }
  }
  for (let key in map) {
    if (map[key] === 1) {
      target = key
      break
    }
  }
  return target
};

// 输入：s = "abaccdeff"
// 输出：'b'
// 示例 2:

// 输入：s = "" 
// 输出：' '

console.log(firstUniqChar('abaccdeff'));
console.log(firstUniqChar(''));
console.log(firstUniqChar('aadadaad'));