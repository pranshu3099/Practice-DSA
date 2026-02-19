var zigzagLevelOrder = function(root) {
  if (root === null) return [];
  let leftToRight = true;
  let queue = [root];
  let start = 0;
  const ans = [];

  while (start < queue.length) {
    const levelSize = queue.length - start;  
    const currentLevel = []; 

    for (let i = 0; i < levelSize; i++) {
      let node = queue[start++];
      if (node.left)  queue.push(node.left);
      if (node.right) queue.push(node.right);

      if (leftToRight) {
        currentLevel[i] = node.val;                        
      } else {
        currentLevel[levelSize - 1 - i] = node.val;       
      }
    }

    ans.push(currentLevel);
    leftToRight = !leftToRight;
  }

  return ans;
};