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

function getDiameter(root){
    let maxi = 0;
    function calculate(root){
    if(root === null) return 0;
    let lh = calculate(root.left, maxi);
    let rh = calculate(root.right, maxi);
    maxi = Math.max(maxi, lh + rh);
    return 1 + Math.max(lh, rh);
    }
    calculate(root);
    return maxi;
}

var diameterOfBinaryTree = function(root) {
     return getDiameter(root);
};