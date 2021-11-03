/**
 * @param {number} n
 * @return {number}
 */
const forMatBigInt = (number) => {
  const bigNumber = 1000000007
  return number >= bigNumber ? number % bigNumber : number
}
var fib = function (n) {
  if (n >= 1000000008) return 1

  switch (n) {
    case 0:
    case 1: {
      return n
    }
    default: {
      let count = n
      let res = [0, 1]
      while (count >= 2) {
        const target = forMatBigInt(res[res.length - 1] + res[res.length - 2])
        res.push(target)
        count--
      }
      return res[n]
    }
  }
};
// 输入：n = 2
// 输出：1
// 示例 2：

// 输入：n = 5
// 输出：5

console.log(fib(2));
console.log(fib(45));