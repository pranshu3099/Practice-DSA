/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let misssingNumberAtIndex = arr[mid] - (mid + 1)
    if (k > misssingNumberAtIndex) {
      low = mid + 1; // because 5 > misssingNumberAtIndex which is 1 so left portion can be eleminated
    } else {
      high = mid - 1;
    }
  }
   return low + k;
};