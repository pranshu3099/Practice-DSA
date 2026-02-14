/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length;
    let sum = nums[0];
    let max = nums[0];
    for(let i = 1; i < n; i++){
    sum = sum + nums[i];
    if(sum < nums[i]){
       sum = nums[i];
    }
    max = Math.max(sum, max);
}
    return max;
};