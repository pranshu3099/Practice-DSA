/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */



var characterReplacement = function(s, k) {
   let m = new Map();
  let l = 0,
    maxFreq = 0,
    maxLen = 0;

  for (let r = 0; r < s.length; r++) {
    m.set(s[r], (m.get(s[r]) || 0) + 1);
    maxFreq = Math.max(maxFreq, m.get(s[r]));

    if (r - l + 1 - maxFreq > k) {
      m.set(s[l], m.get(s[l]) - 1);
      l++;
    }

    maxLen = Math.max(maxLen, r - l + 1);
  }

  return maxLen;


};