// 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

// 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

// 回文串不一定是字典当中的单词。

//  

// 示例1：

// 输入："tactcoa"
// 输出：true（排列有"tacocat"、"atcocta"，等等）


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const len = s.length
  const checkWords = () => {
    const arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
      const target = arr[i]
      let breakFlag = false
      for (let j = i + 1; j < arr.length; j++) {
        if (!breakFlag) {
          const compareTarget = arr[j]
          if (compareTarget === target) {
            arr.splice(i, 1)
            arr.splice(--j, 1)
            i--
            breakFlag = true
          }
        }

      }
    }
    return arr.length % 2 === 0 ? arr.length === 0 : arr.length <= 1
  }
  switch (len) {
    case 0:
    case 1:
      return true
    case 2:
      return s[0] === s[1]
    default:
      return checkWords()
  }
};

// console.log(canPermutePalindrome('tactcoa'));
// console.log(canPermutePalindrome('abcdabcd'));
// console.log(canPermutePalindrome('abcdabce'));
console.log(canPermutePalindrome('aaaaaa'));