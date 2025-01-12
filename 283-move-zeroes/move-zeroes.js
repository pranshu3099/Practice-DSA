/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = -1;
  let temp = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return nums;
  for (let i = j + 1; i < n; i++) {
    if (nums[i] !== 0) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};