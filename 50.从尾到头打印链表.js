/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 示例 1：

  输入：head = [1,3,2]
  输出：[2,3,1]
 */
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
var reversePrint = function (head, result = []) {
  if (head.next == null) return result.reverse()
  result.push(head.val)
  return reversePrint(head.next, result)
};
let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}
console.log(reversePrint(head));