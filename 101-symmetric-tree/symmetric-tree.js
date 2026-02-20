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
function isTreeSymmetric(node1, node2) {
  if (node1 === null || node2 === null) return node1 === node2;
  return (
    node1.val === node2.val &&
    isTreeSymmetric(node1.left, node2.right) &&
    isTreeSymmetric(node1.right, node2.left)
  );
}


var isSymmetric = function(root) {
  if (!root) return false;
  return isTreeSymmetric(root.left, root.right);
};