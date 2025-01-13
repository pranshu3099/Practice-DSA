/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//      let n = nums.length;
//      let i = 0;
//      if(nums.length === 1){
//         if(nums[0] === 1 || nums[0] === 0)return nums[0]+1
//         else return 1;
//      }
//     const numSet = new Set(nums);
//     for (i = 1; i <= n; i++) {
//     if (!numSet.has(i)) {
//       return i;
//     }
//   }
//   return i;
// };

var firstMissingPositive = function (nums) {
  const numSet = new Set(nums);
  let i = 1;

  while (numSet.has(i)) {
    i++;
  }

  return i;
};