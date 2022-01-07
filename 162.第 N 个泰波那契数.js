// 泰波那契序列 Tn 定义如下：

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

//  

// 示例 1：

// 输入：n = 4
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// 示例 2：

// 输入：n = 25
// 输出：1389537

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  switch (n) {
    case 0:
      return 0
    case 1:
      return 1;
    case 2:
      return 1;
    default:
      let p = 0, q = 0, r = 1, s = 1;
      for (let i = 3; i <= n; i++) {
        p = q;
        q = r;
        r = s;
        s = p + q + r;
      }
      return s
  }
};

console.log(tribonacci(3));
console.log(tribonacci(4));
console.log(tribonacci(25));
console.log(tribonacci(37));