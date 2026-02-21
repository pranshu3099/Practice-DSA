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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    const queue = [[root, 0n]];
    let start = 0;
    let width = 0n;
    while(start < queue.length){
        let levelSize = queue.length - start;
        let firstIndex, lastIndex;
        for(let i = 0; i < levelSize; i++){
            const [node, index] = queue[start++];
            if(i===0)firstIndex = index;
            if(i === levelSize-1)lastIndex = index;
            if (node.left) queue.push([node.left, 2n * index + 1n]);
            if (node.right) queue.push([node.right, 2n * index + 2n]);
        }
             width = width > (lastIndex - firstIndex + 1n) 
                ? width 
                : (lastIndex - firstIndex + 1n);
    }

    return Number(width);

};