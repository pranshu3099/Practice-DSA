/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0;
  let r = 0;
  let m = new Map();
  let n = s.length;
  let maxlen = 0;
  while (r < n) {
    if (!m.get(s[r]) && m.get(s[r]) !== 0) {
      m.set(s[r], r);
    } else {
      l = Math.max(l, m.get(s[r]) + 1);
      m.set(s[r], r);
    }
    maxlen = Math.max(maxlen, r - l + 1);
    r++;
  }
  return maxlen;
};