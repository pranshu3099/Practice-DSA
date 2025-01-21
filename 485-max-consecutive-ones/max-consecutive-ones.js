/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            count++;
            max = Math.max(count,max)
        }
        else{
            count = 0;
        }
    }
    return max;
};