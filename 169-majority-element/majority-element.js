/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     nums.sort((a, b) => a - b);
  let count = 0;
  let prev = 0;
  let n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== prev) {
      if (count < n / 2) {
        count = 1;
        prev = nums[i];
      } else if (count > n / 2) return prev;
    } else {
      count++;
    }
  }
  if (count > n / 2) return prev;
};