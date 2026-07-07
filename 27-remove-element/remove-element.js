/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    let n = nums.length;
    let previousIndex = 0;
    for(let i = 0; i < n; i++){
        if(nums[i] !== val){
            nums[previousIndex] = nums[i];
            previousIndex++;
        }else{
            count++;
        }
    }
    
    return n - count;
};