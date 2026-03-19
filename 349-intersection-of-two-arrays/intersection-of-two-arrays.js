/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  nums1.sort((a, b) => a - b); 
  nums2.sort((a, b) => a - b);
  let n = nums1.length;
  let m = nums2.length;
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < n && j < m) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums2[j] < nums1[i]) {
      j++;
    } else {
     if (ans.length === 0 || ans[ans.length - 1] !== nums1[i]) {
                ans.push(nums1[i]);
     }
      i++;
      j++;
    }
  }
  return ans;
};