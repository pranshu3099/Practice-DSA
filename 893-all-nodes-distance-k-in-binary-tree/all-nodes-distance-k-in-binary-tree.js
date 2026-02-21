/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const storeParent = (root) => {
  const map = new Map();

  function Traverse(root, parent) {
    if (root === null) return;
    map.set(root, parent);
    Traverse(root.left, root);
    Traverse(root.right, root);
  }

  Traverse(root, null);

  return map;
};


var distanceK = function(root, target, k) {
  if (root === null) return root;
  let parentMap = storeParent(root);
  let queue = [target];
  let visited = new Set([target]);
  let start = 0;
  let distance = 0;
  while (start < queue.length && distance < k) {
    let levelSize = queue.length - start;
    for (let i = 0; i < levelSize; i++) {
      const node = queue[start++];
      if (node.left && !visited.has(node.left)) {
        visited.add(node.left);
        queue.push(node.left);
      }
      if (node.right && !visited.has(node.right)) {
        visited.add(node.right);
        queue.push(node.right);
      }
      const parent = parentMap.get(node);
      if (parent && !visited.has(parent)) {
        visited.add(parent);
        queue.push(parent);
      }
    }
    distance++;
  }
  if (distance === k) return queue.slice(start).map(node => node.val);
  return [];
};