/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null
  let now = head
  while (now !== null) {
    let nowNext = now.next
    if (prev == null) {
      now.next = null
    } else {
      now.next = prev
    }
    prev = now
    now = nowNext
  }
  return prev
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
console.log(JSON.stringify(reverseList(head)));