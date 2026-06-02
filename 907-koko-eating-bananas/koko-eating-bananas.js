/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function getMaximum(nums = []) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  return max;
}

function getRequiredTime(piles = [], hours) {
  let totalHours = 0;
  for (let i = 0; i < piles.length; i++) {
    totalHours = totalHours + Math.ceil(piles[i] / hours);
  }
  return totalHours;
}


var minEatingSpeed = function(piles, h) {
  let low = 1;
  let high = getMaximum(piles);
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let requiredTime = getRequiredTime(piles, mid);
    if (requiredTime <= h) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};