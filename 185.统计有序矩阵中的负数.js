// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。

// 请你统计并返回 grid 中 负数 的数目。

//  

// 示例 1：

// 输入：grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
// 输出：8
// 解释：矩阵中共有 8 个负数。
// 示例 2：

// 输入：grid = [[3, 2], [1, 0]]
// 输出：0
// 示例 3：

// 输入：grid = [[1, -1], [-1, -1]]
// 输出：3
// 示例 4：

// 输入：grid = [[-1]]
// 输出：1
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const arr = grid.flat()
  return arr.filter(item => item < 0).length

};
console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
console.log(countNegatives([[3, 2], [1, 0]]));
console.log(countNegatives([[1, -1], [-1, -1]]));
console.log(countNegatives([[-1]]));