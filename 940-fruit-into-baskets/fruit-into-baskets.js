/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let n = fruits.length;
  let l = 0;
  let r = 0;
  let maxLen = 0;
  let m = new Map();

  while (r < n) {
    m.set(fruits[r], m.get(fruits[r]) ? m.get(fruits[r]) + 1 : 1);

    if (m.size > 2) {
      m.set(fruits[l], m.get(fruits[l]) - 1);
      if (m.get(fruits[l]) === 0) {
        m.delete(fruits[l]);
      }
      l++;
    }

    if (m.size <= 2) {
      maxLen = Math.max(maxLen, r - l + 1);
    }

    r++;
  }

  return maxLen;
};