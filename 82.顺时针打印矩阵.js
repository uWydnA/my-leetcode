/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

  示例 1：

  输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  输出：[1,2,3,6,9,8,7,4,5]

 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let matrixUpdate = []
  for (let j = matrix[0].length - 1; j >= 0; j--) {
    let arr = []
    for (let i = 1; i < matrix.length; i++) {
      arr.push(matrix[i][j])
    }
    matrixUpdate.push(arr)
  }
  return matrix[0].concat(spiralOrder(matrixUpdate))
};
console.log(`spiralOrder`, spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));