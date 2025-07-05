/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


function niceSubarrays(nums = [], k){
    if(k < 0) return 0;
    let l = 0;
    let r = 0;
    let count = 0;
    let sum = 0;
    let n = nums.length;
    while(r<n){
        sum += (nums[r] % 2);
        while(sum >k){
            sum = sum - (nums[l] % 2);
            l++;
        }
        count = count + (r-l+1);
        r++;
    }
    return count;
}


var numberOfSubarrays = function(nums, k) {
const ans = niceSubarrays(nums, k) - niceSubarrays(nums, k-1);
return ans;
};