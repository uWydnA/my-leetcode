/**
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

  序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

  示例 1：

  输入：target = 9
  输出：[[2,3,4],[4,5]]


 */

/**
 * 
 * 
 * 解题思路
 * 先把数分解9=1+8=2+7=3+6=4+5,按这种，找到可能组成正确结果的数组，根据数的结构，易知结果可能存在[1,2,3,4,5]中，不难发现数组最后一个数,如果target是偶
 * 数就是target/2,如果是奇数就是target/2取整加一，即Math.floor(target/2)+1 或采用二进制取整(target/2 | 0) + 1,再对找到的数组采用滑动窗口模型，找出
 * 答案。

 */

/**
* @param {number} target
* @return {number[][]}
*/
var findContinuousSequence = function (target) {
  let index = target % 2 === 0 ? target / 2 : (target / 2 | 0) + 1
  let res = []
  let temp = []
  let sum = 0
  for (let i = 1; i <= index; i++) {
    temp.push(i)
    sum += i
    while (sum > target) {
      sum-=temp.shift()
    }
    if(sum === target){
      res.push([...temp])
    }
  }
  return res;
};
console.log(`findContinuousSequence`, findContinuousSequence(9));