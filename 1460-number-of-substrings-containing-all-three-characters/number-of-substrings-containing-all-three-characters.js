/**
 * @param {string} s
 * @return {number}
 */
function getMinimum(...arr) {
  let min = +99999999;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}


var numberOfSubstrings = function(s) {
  let n = s.length;
  let r = 0;
  let m = new Map();
  m.set("a", -1);
  m.set("b", -1);
  m.set("c", -1);
  let count = 0;
  while (r < n) {
    m.set(s[r], r);
    if (m.get("a") !== -1 && m.get("b") !== -1 && m.get("c") !== -1) {
      count = count + 1 + getMinimum(m.get("a"), m.get("b"), m.get("c"));
    }
    r++;
  }
  return count;
};