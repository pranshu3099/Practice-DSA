/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
//   let n = nums.length;
//   let obj = {};
//   for (let i = 0; i < n; i++) {
//     if (obj[nums[i]]) {
//       obj[nums[i]]++;
//     } else {
//       obj[nums[i]] = 1;
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] === 1) return Number(key);
//   }
let xor = 0;
for(let i = 0 ; i<nums.length;i++){
    xor = xor ^ nums[i];
}
return xor;
};