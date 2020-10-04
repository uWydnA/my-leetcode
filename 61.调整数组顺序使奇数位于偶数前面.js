/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

  示例：

  输入：nums = [1,2,3,4]
  输出：[1,3,2,4] 
  注：[3,1,2,4] 也是正确的答案之一。

 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left=0, right = nums.length-1
  let ji = []
  let ou = []
  while(left<=right){
    if(nums[left] % 2 === 0) {
      ou.push(nums[left])
    }else{
      ji.push(nums[left])
    }
    if(left===right) break
    if(nums[right] % 2 === 0) {
      ou.push(nums[right])
    }else{
      ji.push(nums[right])
    }
    left++
    right--
  }
  ji.sort((a,b)=>a-b)
  ou.sort((a,b)=>a-b)
  return [...ji,...ou]

};
console.log(`exchange`, exchange([1,3,5]));