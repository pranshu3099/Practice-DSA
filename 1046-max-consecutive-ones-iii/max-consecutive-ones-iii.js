/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let n = nums.length;
  let l = 0;
  let r = 0;
  let maxLen = 0;
  let zeroCount = 0;
  while (r < n) {
    if (nums[r] === 0) zeroCount++;
    while (zeroCount > k) {
      if (nums[l] === 0) {
        zeroCount--;
      }
      l++;
    }
    if (zeroCount <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }
  return maxLen;
};