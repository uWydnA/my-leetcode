/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let res = []
  let node = head
  while (node !== null) {
    res.unshift(node.val)
    node = node.next
  }
  return res
};