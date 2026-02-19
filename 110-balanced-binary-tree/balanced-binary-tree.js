/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isBalancedBinaryTree(root){
  if (root === null) return 0;
  let lh = isBalancedBinaryTree(root.left);
  let rh = isBalancedBinaryTree(root.right);
  if (lh === -1 || rh === -1) return -1;
  if (Math.abs(lh - rh) > 1) return -1;
  return 1 + Math.max(lh, rh);
}

var isBalanced = function(root) {
  return isBalancedBinaryTree(root) !== -1;
};