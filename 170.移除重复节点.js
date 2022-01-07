// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

// 示例1:

//  输入：[1, 2, 3, 3, 2, 1]
//  输出：[1, 2, 3]
// 示例2:

//  输入：[1, 1, 1, 1, 2]
//  输出：[1, 2]
// 提示：

// 链表长度在[0, 20000]范围内。
// 链表元素在[0, 20000]范围内。
// 进阶：

// 如果不得使用临时缓冲区，该怎么解决？

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
var removeDuplicateNodes = function (head) {
  const arr = [head.val]
  let [pre, next] = [head, head.next]
  while (next) {
    if (arr.includes(next.val)) {
      pre.next = next.next
    } else {
      arr.push(next.val)
      pre = pre.next
    }
    next = next.next
  }
  console.log(pre, next, head);
  return head
};


const listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: { val: 2, next: { val: 1 } }
      }
    }
  }
}


console.log(removeDuplicateNodes(listNode));
