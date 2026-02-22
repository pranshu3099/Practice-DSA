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

function findHeightLeft(node){
    let height = 0;
    while(node){
        height++;
        node = node.left;
    }
    return height;
}

function findHeightRight(node){
    let height = 0;
    while(node){
        height++;
        node = node.right;
    }
    return height;
}




var countNodes = function(root) {
    if(root === null)return 0;
    let lh = findHeightLeft(root);
    let rh = findHeightRight(root);
    if (lh === rh) return Math.pow(2, lh) - 1;
    return 1 + countNodes(root.left) + countNodes(root.right);
};