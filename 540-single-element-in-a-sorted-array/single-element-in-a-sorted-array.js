/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
let n = nums.length;
  if (n === 1) return nums[0];
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];
  let low = 1;
  let high = n - 2;
  let ans = -1;
     while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (
      nums[middle] !== nums[middle - 1] &&
      nums[middle] !== nums[middle + 1]
    ) {
      ans = nums[middle];
      break;
    }
    if (
      (middle % 2 === 1 && nums[middle] === nums[middle - 1]) ||
      (middle % 2 === 0 && nums[middle] === nums[middle + 1])
    ) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return ans;
};