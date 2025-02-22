/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function findCombination(index, arr, result = [], target, ans = []) {
  if (index === arr.length) {
    if (target === 0) {
      ans.push([...result]);
    }
    return;
  }

  if (arr[index] <= target) {
    result.push(arr[index]);
    findCombination(index, arr, result, target - arr[index], ans);
    result.pop();
  }
  findCombination(index + 1, arr, result, target, ans);
}


var combinationSum = function(candidates, target) {
        let ans = [];
        findCombination(0,candidates,[],target,ans);
        return ans;
};