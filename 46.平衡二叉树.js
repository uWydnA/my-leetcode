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
    const balanced = (left, right) => {
        if (left === right) return true
        if (left && right && left.val === right.val) {
            return balanced(left.left, right.right) && balanced(left.right, right.left)
        }
        return false
    }
    return root ? balanced(root.left, root.right) : true
};
const nodes = {
    val: 1,
    left: { val: 2, left: {val:1}, right: null },
    right: { val: 2, left: null, right: {val:2} }
}
console.log(isBalanced(nodes));