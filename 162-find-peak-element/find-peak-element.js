/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
 let n = nums.length
 if (n === 1) return 0;
  let low = 0;
  let high = n - 1;
  if (nums[low] >= nums[low + 1]) {
    return low;
  }
  if (nums[high] >= nums[high - 1]) {
    ans = nums[high];
    return high;
  }
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (nums[middle] > nums[middle - 1] && nums[middle] > nums[middle + 1]) {
      return middle;
    }

    // move towards higher neigbour
    if (nums[middle] < nums[middle + 1]) {
      low = middle + 1;
    } else {
      // Peak is on the left side (nums[middle] < nums[middle - 1])

      high = middle - 1;
    }
  }

  return -1
};