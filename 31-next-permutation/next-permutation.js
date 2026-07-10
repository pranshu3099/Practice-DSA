/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;
    let pivot = -1;
       // Step 1: Find the pivot or find the first smallest element from the right
    for(i = n-2; i >= 0; i--){
        if(nums[i] < nums[i+1]){
            pivot = i;
            break;
        }
    }
          // Step 2: If no pivot exists, array is in descending order
    // Example: [3,2,1] -> reverse entire array
    if(pivot === -1){
        reverse(nums, 0, n-1)
        return;
    }

    // Step 3: Find the first number greater than pivot from the right

    for(i = n-1; i > pivot; i--){
        if(nums[i] > nums[pivot]){
            [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
            break;
        }
    }
    // Step 4: Reverse everything to the right of pivot

    reverse(nums, pivot + 1, n-1);

    function reverse(nums, left, right){
        while(left < right){
           [nums[left], nums[right]] = [nums[right], nums[left]];
           left++;
           right--;
        }
    }
};