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

var diameterOfBinaryTree = function(root) {
    let maxi = 0;

    function dfs(node) {
        if (!node) return 0;

        let lh = dfs(node.left);
        let rh = dfs(node.right);

        maxi = Math.max(maxi, lh + rh);
        return 1 + Math.max(lh, rh);
    }

    dfs(root);
    return maxi;
};