/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  numbers.sort((a, b) => a - b)
  return numbers[0]
};

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2, 2, 2, 0, 1]));