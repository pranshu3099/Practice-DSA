/**
 * @param {number[]} nums
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

function getSubsets(index, arr = [], ans = [], res = []){
    if(index === arr.length){
        if(res.length){
          ans.push([...res]);
        }
        return;
    }
    res.push(arr[index]);
    getSubsets(index + 1, arr, ans, res);
    res.pop();
    index = getIndex(index,arr);
    getSubsets(index, arr, ans, res);

}


var subsetsWithDup = function(nums) {
    let ans = [];
    let res = [];
    let index = 0;
    nums.sort((a, b) => a - b);
    ans.push([]);
    getSubsets(index, nums, ans,res);
    return ans;
};