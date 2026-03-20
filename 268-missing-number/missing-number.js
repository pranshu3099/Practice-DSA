/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length;
  let actualSum = (n * (n + 1)) / 2;
  let originalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    originalSum = originalSum + nums[i];
  }
  return actualSum - originalSum;
};


