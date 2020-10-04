/**
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]
 * 
 * 示例 2:
 * 输入: intervals = [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

 */

/**
* @param {number[][]} intervals
* @return {number[][]}
*/
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    let index = -1;
    for (let data of intervals) {
        if (index === -1 || result[index][1] < data[0]) {
            result.push(data)
            index++
        } else {
            result[index][1] = Math.max(result[index][1], data[1])
        }
    }
    return result
};
console.log(merge([[2, 3], [4, 13], [6, 7], [8, 9], [1, 10]]))