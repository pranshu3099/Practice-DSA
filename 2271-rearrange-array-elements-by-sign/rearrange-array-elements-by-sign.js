/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let ans = [];
  let n = nums.length;
  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      ans[negIndex] = nums[i];
      negIndex += 2;
    } else {
      ans[posIndex] = nums[i];
      posIndex += 2;
    }
  }
  return ans;
};