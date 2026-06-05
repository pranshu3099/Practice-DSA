/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function getLargestElement(nums = []) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  return max;
}

function getTotalSum(nums = []) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

function countSubarrays(nums = [], maxAllowedSum) {
  let currentSum = 0;
  let subarrays = 1;
  for (let i = 0; i < nums.length; i++) {
    if (currentSum + nums[i] <= maxAllowedSum) {
      currentSum += nums[i];
    } else {
      subarrays += 1;
      currentSum = nums[i];
    }
  }
  return subarrays;
}

var splitArray = function(nums, k) {
  let n = nums.length;
  if (k > n) return -1;
  let low = getLargestElement(nums);
  let high = getTotalSum(nums);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (countSubarrays(nums, mid) > k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};