
/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

  示例1：

  输入：1->2->4, 1->3->4
  输出：1->1->2->3->4->4

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let result = new ListNode(0)
  let next = result
  while (l1 && l2) {
    if (l1.val > l2.val) {
      next.next = l2
      l2 = l2.next
    } else {
      next.next = l1
      l1 = l1.next
    }
    next = next.next
  }
  next.next = l1?l1:l2
  return result.next
};