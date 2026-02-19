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
var maxPathSum = function(root) {
    let maxi = -Infinity;
    function dfs(root){
        if(root === null) return 0;
        const leftVal = Math.max(dfs(root.left), 0);
        const rightVal = Math.max(dfs(root.right), 0);
        maxi = Math.max(maxi, leftVal + rightVal + root.val);
        return root.val + Math.max(leftVal, rightVal);
    }

     dfs(root);
     return maxi;
};