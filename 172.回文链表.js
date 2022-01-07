// 编写一个函数，检查输入的链表是否是回文的。

//  

// 示例 1：

// 输入： 1->2
// 输出： false 
// 示例 2：

// 输入： 1->2->2->1
// 输出： true 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head == null) return true
  if (head.next == null) return true
  let arr = []
  while (head) {
    if (head.val != null) {
      arr.push(head.val)
    }
    head = head.next
  }
  console.log(arr, arr.length, arr.length % 2);
  if (arr.length % 2) {
    const mid = (arr.length - 1) / 2
    const midItem = `${arr[Math.floor(arr.length / 2)]}`
    const first = arr.slice(0, mid).join('')
    const last = arr.slice(mid + 1, arr.length).reverse().join('')
    return first === last
  } else {
    const mid = arr.length / 2
    const first = arr.slice(0, mid).join('')
    const last = arr.slice(mid, arr.length).reverse().join('')
    return first === last
  }
};
const test1 = { val: 1, next: { val: 2, next: null } }
// const test2 = { val: 1, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } }
const test2 = { val: 1, next: { val: 2, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } } }
const test3 = { val: -129, next: { val: -129, next: null } }
const test4 = { val: 1, next: { val: 1, next: { val: 0, next: { val: 1 } } } }
// console.log(isPalindrome(test1));
// console.log(isPalindrome(test2));
// console.log(isPalindrome(test3));
console.log(isPalindrome(test4));
