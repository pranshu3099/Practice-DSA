/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function firstPosition(nums, target){
    let n = nums.length;
    let low = 0;
    let high = n-1;
    let firstIndex = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] === target){
            firstIndex = mid;
            high = mid - 1;
        }else if(nums[mid] < target){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return firstIndex;
}


function lastPosition(nums, target){
    let n = nums.length;
    let low = 0;
    let high = n-1;
    let lastIndex = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid] === target){
            lastIndex = mid;
            low = mid + 1;
        }else if(nums[mid] < target){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return lastIndex;
}

var searchRange = function(nums, target) {
    let firstIndex = firstPosition(nums, target);
    if(firstIndex === -1) return [-1, -1];
    let lastIndex =  lastPosition(nums, target);
    return [firstIndex, lastIndex]

};