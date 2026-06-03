/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function getMinimum(nums = []) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  return max;
}

function getMaximum(nums = []) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

function daysRequired(weights, capacity, days) {
  let DayCount = 1;
  let weightCount = 0;
  for (let i = 0; i < weights.length; i++) {
    if (weightCount + weights[i] > capacity) {
      DayCount++;
      weightCount = weights[i];
    } else {
      weightCount += weights[i];
    }
  }
  return DayCount <= days;
}

var shipWithinDays = function(weights, days) {
  let low = getMinimum(weights);
  let high = getMaximum(weights);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (daysRequired(weights, mid, days)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low
};