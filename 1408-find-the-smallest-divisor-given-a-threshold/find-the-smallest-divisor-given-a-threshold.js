/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

 function getMaxElement(nums = []) {
  let max = -999999;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
  }
  return max;
}

function getAddition(nums = [], div) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + Math.ceil(nums[i] / div);
  }
  return sum;
}
var smallestDivisor = function(nums, threshold) {
  let low = 1;
  let high = getMaxElement(nums);
  let ans = -1;
  while (low <= high) {
    let div = Math.floor((low + high) / 2);
    let sum = getAddition(nums, div);
    if (sum <= threshold) {
      ans = div;
      high = div - 1;
    } else {
      low = div + 1;
    }
  }
  return ans;
};