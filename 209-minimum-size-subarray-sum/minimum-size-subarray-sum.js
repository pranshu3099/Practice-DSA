/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let minLen = Infinity;
    let sum = 0;
    let i = 0;
    
    for(let j = 0; j < n; j++) {
        sum += nums[j];
        
        while(sum >= target) {
            minLen = Math.min(minLen, j - i + 1);
            sum -= nums[i];
            i++;
        }
    }
    
    return minLen === Infinity ? 0 : minLen;
};