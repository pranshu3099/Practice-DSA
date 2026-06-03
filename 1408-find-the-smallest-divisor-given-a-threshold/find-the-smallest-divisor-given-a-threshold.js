/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
function getMaximum(nums = []) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  return max;
}

function Ispossible(nums = [], divisor, thresHold) {
  let sum = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    sum += Math.ceil(nums[i] / divisor);
  }
  return sum <= thresHold;
}

var smallestDivisor = function(nums, threshold) {
  let low = 1;
  let high = getMaximum(nums);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (Ispossible(nums, mid, threshold)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};