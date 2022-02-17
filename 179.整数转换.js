// 整数转换。编写一个函数，确定需要改变几个位才能将整数A转成整数B。

// 示例1:

// 输入：A = 29 （或者0b11101）, B = 15（或者0b01111）
// 输出：2
// 示例2:

// 输入：A = 1，B = 2
// 输出：2


/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
  let a, b, count
  const TenToTwo = n => n < 0 ? exchange((Array(32).join("0") + (-n - 1).toString(2)).slice(-32)) : str = (Array(32).join("0") + n.toString(2)).slice(-32);
  const exchange = str => str.split('').map(v => v == 0 ? 1 : 0).join('');
  a = TenToTwo(A)
  b = TenToTwo(B)
  count = 0
  console.log(a, b);
  const bArr = b.split('')
  const aArr = a.split('')
  bArr.forEach((item, index) => {
    if (item !== aArr[index]) {
      count++
    }
  })
  return count
};
console.log(convertInteger(826966453, -729934991));