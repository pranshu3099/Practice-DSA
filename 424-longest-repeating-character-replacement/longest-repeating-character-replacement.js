/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

function IntializeMap(s) {
  let m = new Map();
  for (let i = 0; i < s.length; i++) {
    m.set(s[i], 0);
  }
  return m;
}

function getMaxFreq(m) {
  let max = -1;
  for (let val of m.values()) {
    max = Math.max(max, val);
  }
  return max;
}

var characterReplacement = function(s, k) {
  let m = IntializeMap(s);
  let l = 0;
  let r = 0;
  let maxfreq = 0;
  let maxLen = 0;
  let n = s.length;

  while (r < n) {
    m.set(s[r], m.get(s[r]) ? m.get(s[r]) + 1 : 1);
    maxfreq = getMaxFreq(m);

    while (r - l + 1 - maxfreq > k) {
      m.set(s[l], m.get(s[l]) - 1);
      l++;
      maxfreq = getMaxFreq(m);
    }

    if (r - l + 1 - maxfreq <= k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
    r++;
  }

  return maxLen;
};