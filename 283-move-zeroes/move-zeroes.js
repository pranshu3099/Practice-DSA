/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let n = nums.length;
  let start = -1;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      start = i;
      break;
    }
  }
  if(start === -1)return nums;
  j = start + 1;
  while (j < n) {
    if (nums[start] === 0 && nums[j] !== 0) {
      let temp = nums[start];
      nums[start] = nums[j];
      nums[j] = temp;
      start++;
      j++;
    } else if (nums[j] === 0) {
      j++;
    }
  }
  return nums;
};