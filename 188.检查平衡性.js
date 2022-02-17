// 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。


// 示例 1:
// 给定二叉树[3, 9, 20, null, null, 15, 7]
// 3
//   / \
// 9  20
//   /  \
// 15   7
// 返回 true 。
// 示例 2:
// 给定二叉树[1, 2, 2, 3, 3, null, null, 4, 4]
// 1
//   / \
// 2   2
//   / \
// 3   3
//   / \
// 4   4
// 返回 false 。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true
  let res = true
  const getDepth = (root) => {
    if (!root) return;
    if (!root) return 0;
    const left = getDepth(root.left)
    const right = getDepth(root.right)
    if (Math.abs(left - right) > 1) res = false
    return Math.max(left, right) + 1
  }
  getDepth(root)
  return res
};