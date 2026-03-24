/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let n = nums.length;
  let pos = [];
  let neg = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) neg.push(nums[i]);
    else pos.push(nums[i]);
  }

  if (pos.length >= neg.length) {
    for (let i = 0; i < neg.length; i++) {
      nums[2 * i] = pos[i];
      nums[2 * i + 1] = neg[i];
    }
  } else if (neg.length >= pos.length) {
    for (let i = 0; i < pos.length; i++) {
      nums[2 * i] = pos[i];
      nums[2 * i + 1] = neg[i];
    }
  }

  return nums;
};