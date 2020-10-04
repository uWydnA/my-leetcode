/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let arr = []
  function recursive(r) {
      if (!r) return
      recursive(r.left)
      arr.push(r.val)
      recursive(r.right)
  }
  recursive(root)
  return arr[arr.length - k]
};
const root = {
  val:3,
  left:{
    val:1,
    right:{
      val:2
    }
  },
  right:{
    val:4
  }
}
console.log(kthLargest(root,1));