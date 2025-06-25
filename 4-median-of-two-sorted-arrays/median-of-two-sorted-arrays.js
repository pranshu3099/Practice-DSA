/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
let n1 = nums1.length;
  let n2 = nums2.length;

  if (n1 > n2) return findMedianSortedArrays(nums2, nums1); // to make sure nums1 is always the smaller array
  let low = 0;
  let high = n1;
  let left = Math.floor((n1 + n2 + 1) / 2);
  let n = n1 + n2;
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;
    let l1 = -9999999999;
    let l2 = -9999999999;
    let r1 = +9999999999;
    let r2 = +9999999999;
    if (mid1 < n1) r1 = nums1[mid1]; // cuz may be the index might does not exist
    if (mid2 < n2) r2 = nums2[mid2]; // cuz may be the index might does not exist
    if (mid1 - 1 >= 0) {
      l1 = nums1[mid1 - 1];
    }
    if (mid2 - 1 >= 0) {
      l2 = nums2[mid2 - 1];
    }
    if (l1 <= r2 && l2 <= r1) {
      if (n % 2 === 1) {
        return Math.max(l1, l2);
      } else {
        let max = Math.max(l1, l2);
        let min = Math.min(r1, r2); 
        return (max + min) / 2;
      }
    } else if (l1 > r2) {
      high = mid1 - 1; // we need less element on the left side so decrease
    } else if (l2 > r1) {
      low = mid1 + 1; // we need more element on the left side so increase
    }
  }
  return 0;
};