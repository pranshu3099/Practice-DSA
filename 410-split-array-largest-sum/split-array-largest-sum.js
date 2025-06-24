/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function getMinElement(nums = []) {
  let min = -999999;
  for (let i = 0; i < nums.length; i++) {
    min = Math.max(nums[i], min);
  }
  return min;
}

function getMaxElement(nums = []) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

function isPossible(nums = [], k) {
  let count = 1;
  let total_nums = 0;
  for (let i = 0; i < nums.length; i++) {
    if (total_nums + nums[i] > k) {
      count = count + 1;
      total_nums = nums[i];
    } else {
      total_nums = total_nums + nums[i];
    }
  }

  return count;
}

var splitArray = function(nums, k) {
  if (k > nums.length) return -1;
  let low = getMinElement(nums);
  let high = getMaxElement(nums);
  let ans = -1;
  while (low <= high) {
    let max_sum = Math.floor((low + high) / 2);
    let count = isPossible(nums, max_sum);
    if (count <= k) {
      ans = max_sum;
      high = max_sum - 1;
    } else {
      low = max_sum + 1;
    }
  }
  return ans; 
};