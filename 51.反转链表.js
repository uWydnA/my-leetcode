/**
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

  示例:

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL

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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null
  let now = head
  while (now !== null) {
    let nowNext = now.next
    if(prev === null){
      now.next = null
    }else{
      now.next = prev
    }
    prev = now
    now = nowNext
    console.log(prev,'prev');
    console.log(now,'now');
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
console.log(reverseList(head));