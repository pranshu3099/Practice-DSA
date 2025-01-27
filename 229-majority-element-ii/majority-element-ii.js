/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
 nums.sort((a, b) => a - b);
  let count = 1;
  let prev = -1;
  let ans = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === prev) {
      count++;
      if (count > n / 3 && !ans.includes(prev)) {
        ans.push(prev);
      }
    } else {
      prev = nums[i];
      count = 1;
      if (count > n / 3 && !ans.includes(prev)) {
        ans.push(prev);
      }
    }
  }
  return ans;
};