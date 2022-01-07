// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

// 示例1:

//  输入："aabcccccaaa"
//  输出："a2b1c5a3"
// 示例2:

//  输入："abbccd"
//  输出："abbccd"
//  解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
// 提示：

// 字符串长度在[0, 50000]范围内。

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let n = S.length
  let result = `${S[0]}1`
  const SArr = S.split('')
  let nowWord = ''
  let numberCount = 1
  SArr.forEach((item, index) => {
    const next = SArr[index + 1]
    if (nowWord === '') {
      nowWord = item
    }
    if (next) {
      if (next === item && item === nowWord) {
        let last = 1
        if (numberCount) {
          last = `${numberCount}`.length
        }
        const numberWord = result.slice(result.length - last, result.length)
        const number = parseInt(numberWord)
        const isNumber = Number.isInteger(number)
        if (isNumber) {
          numberCount++
          result = result.slice(0, result.length - last) + numberCount
        } else {
          numberCount = 2
          result = result.slice(0, result.length - last) + 2
        }
      } else {
        nowWord = ''
        numberCount = 1
        result = result.slice(0, result.length) + `${next}1`
      }
    }
  })
  return result.length >= n ? S : result
};
// console.log(compressString('aabcccccaaa'));
// console.log(compressString('abbccd'));
console.log(compressString("rrrrLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLvvvvvvvvvvvKKKKKKKKKKKKKKiiiiiiiiiiiiiiiiiiiiiiiiiiiiZZZZZZZZZZZZZZZZZZZIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIoooooooooooooooooooooooooooooooooooobbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvvvvvvvvvvvvvvvvvvvvvvvllllllllllllllllllllllllllllllllllllllllBBBBBBBKKKKKKKKKKKKKKfffffffffffffffffffffffffffffffffffDDDDDDDDDDDDDDDDDDDDDDDDDDDsssssssssssssssssssssssssssssssssssssssNNNNNZZZZZZZZZZZZZZZZZZZZZZZZZZNNNNNNNNNNDDDDDDDDDDDDDDDTTTTT"));