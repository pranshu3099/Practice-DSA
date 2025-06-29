/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
  function backTrack(path = [], remaining) {
    if (remaining.length === 0) {
      ans.push([...path]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      path.push(remaining[i]);
      let newRemaining = remaining.filter((_, index) => index !== i);
      backTrack(path, newRemaining);
      path.pop();
    }
  }
  backTrack([], nums);
  return ans;
  }

