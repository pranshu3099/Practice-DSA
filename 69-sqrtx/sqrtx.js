/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let low = 1;
  let high = x;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if ((mid * mid) <= x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
};