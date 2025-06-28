/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function getIndex(index, arr) {
  let i = index;
  let j = i + 1;
  while (i < arr.length && j < arr.length) {
    if (arr[i] !== arr[j]) return j;
    i++;
    j++;
  }
  return j;
}

function getCombinations(index, arr = [], result = [], target, ans) {
  if (index === arr.length) {
    if (target === 0) {
      ans.push([...result]);
    }
    return;
  }

  if (arr[index] <= target) {
    result.push(arr[index]);
    getCombinations(index + 1, arr, result, target - arr[index], ans);
    result.pop();
  }
  index = getIndex(index, arr);
  getCombinations(index, arr, result, target, ans);
}


var combinationSum2 = function(candidates, target) {
    let ans = [];
    let res = [];
    let index = 0;
    candidates.sort((a,b)=>a-b);
    getCombinations(index, candidates, res, target, ans);
    return ans;
};