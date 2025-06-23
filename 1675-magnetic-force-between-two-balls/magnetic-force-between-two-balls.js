/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */

function canWePlaceBalls(nums = [], balls, min_dist) {
  let count = 1; 
  let last = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - last >= min_dist) {
      count++;
      last = nums[i];
    }
    if (count >= balls) return true;
  }
  return false;
}


var maxDistance = function(position, m) {
  position.sort((a, b) => a - b);
  let low = 1;
  let high = position[position.length - 1] - position[0];
  let ans = -1;
  while (low <= high) {
    let min_dist = Math.floor((low + high) / 2);
    if (canWePlaceBalls(position, m, min_dist)) {
      ans = min_dist;
      low = min_dist + 1;
    } else {
      high = min_dist - 1;
    }
  }
  return ans;
};