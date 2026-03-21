/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // [1,2,1,2,1]
   let map = {0 : 1};
   let count = 0;
   let sum = 0;
   for(let i = 0; i < nums.length; i++){
       sum = sum + nums[i];
       let rem = sum - k;
       if(map[rem] !== undefined){
            count += map[rem];
        }
    map[sum] = (map[sum] || 0)+ 1
   }
   return count;
};