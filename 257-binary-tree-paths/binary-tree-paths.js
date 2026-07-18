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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) return [];
  let ans = [];
  let result = [];
  function binaryTreePaths(root) {
    if (root === null) return null;
    ans.push(root.val);
    if (root.left === null && root.right === null) {
      result.push(ans.join("->"));
    }
    binaryTreePaths(root.left);
    binaryTreePaths(root.right);

    ans.pop();
  }

  binaryTreePaths(root);
  return result;
};