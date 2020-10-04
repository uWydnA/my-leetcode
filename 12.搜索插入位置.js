/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const index = nums.indexOf(target)
    if (index >= 0) {
        return index
    }else{
        return nums.concat(target).sort((a,b)=>a-b).indexOf(target)
    }
};
console.log(searchInsert([1, 2, 4, 5], 7))