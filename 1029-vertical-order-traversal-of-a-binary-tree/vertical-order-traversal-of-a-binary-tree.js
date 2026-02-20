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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  if (!root) return null;
  const queue = [[root, 0, 0]];
  const map = new Map(); // col -> [[level, val]]
  let start = 0;
  while (start < queue.length) {
    const [node, vertical, level] = queue[start++];
    if (!map.has(vertical)) map.set(vertical, []);
    map.get(vertical).push([level, node.val]);
    if (node.left) {
      queue.push([node.left, vertical - 1, level + 1]);
    }
    if (node.right) {
      queue.push([node.right, vertical + 1, level + 1]);
    }
  }

  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, nodes]) =>
      nodes.sort((a, b) => a[0] - b[0] || a[1] - b[1]).map(([, val]) => val),
    );
};