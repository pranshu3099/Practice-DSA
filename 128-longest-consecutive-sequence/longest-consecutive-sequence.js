/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let n = nums.length;
    let mySet = new Set();
    let count = 1;
    let longest = 1;
    if(n===0)return 0;
    for(let i=0;i<n;i++){
        mySet.add(nums[i])
    }

    for(let item of mySet){
        if(!mySet.has(item - 1)){
            let count = 1;
            let x = item;

            while(mySet.has(x+1)){
                x = x+1;
                count = count + 1;
            }
            longest = Math.max(longest , count);
        }
    }

    return longest;
};