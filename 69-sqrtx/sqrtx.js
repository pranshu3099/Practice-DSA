/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let low = 1;
  let high = x;
  let ans = 0;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let val = middle * middle;
    if (val > x) {
      high = middle - 1;
    } else if (val <= x) {
      ans = Math.max(middle, ans);
      low = middle + 1;
    }
  }
  return ans;
};