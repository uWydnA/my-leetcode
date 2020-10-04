/**
 * 给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。

 

示例 1：

输入：nums = [12,345,2,6,7896]
输出：2
解释：
12 是 2 位数字（位数为偶数） 
345 是 3 位数字（位数为奇数）  
2 是 1 位数字（位数为奇数） 
6 是 1 位数字 位数为奇数） 
7896 是 4 位数字（位数为偶数）  
因此只有 12 和 7896 是位数为偶数的数字

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length;i++) {
    let str = `${nums[i]}`
    if(str.length%2===0) result++
  }
  return result
};
console.log(`findNumbers`, findNumbers([12, 345, 2, 6, 7896]));