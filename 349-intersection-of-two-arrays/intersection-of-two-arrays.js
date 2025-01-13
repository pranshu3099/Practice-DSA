/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
     let n1 = nums1.length;
  let n2 = nums2.length;
  let ans = [];
  let i = 0;
  let myMap = new Map();
  while (i < n1) {
    myMap.set(nums1[i], (myMap.get(nums1[i]) || 0) + 1);
    i++;
  }

  for (let j = 0; j < n2; j++) {
    if (myMap.has(nums2[j]) && myMap.get(nums2[j]) > 0) {
      ans.push(nums2[j]);
      myMap.set(nums2[j], 0);
    }
  }
  return ans;
};