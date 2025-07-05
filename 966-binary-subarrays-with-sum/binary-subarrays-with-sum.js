/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

function binarySubarray(nums = [], goal) {
  if (goal < 0) return 0;
  let n = nums.length;
  let l = 0;
  let r = 0;
  let count = 0;
  let sum = 0;
  while (r < n) {
    sum += nums[r];
    while (sum > goal) {
      sum = sum - nums[l];
      l++;
    }
    count = count + (r - l + 1);
    r++;
  }
  return count;
}

var numSubarraysWithSum = function(nums, goal) {
    let ans = binarySubarray(nums, goal) - binarySubarray(nums, goal-1);
    return ans;
};