/**
 * @param {number[]} nums
 * @return {number}
 */
function findElement(set, x) {
  if (set.has(x)) return true;
  else return false;
}

var longestConsecutive = function(nums) {
      let set = new Set(nums);
  let count = 1;
  let maxCount = 0;
  for (let item of set) {
    if (findElement(set, item - 1)) {
    } else {
      let num = item;
      count = 1;
      while (set.has(num + 1)) {
        count = count + 1;
        num = num + 1;
      }
    }
    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
};