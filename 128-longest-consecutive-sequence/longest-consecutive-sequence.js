/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxCount = 0;

    for (let item of set) {
        if (!set.has(item - 1)) {  
            let num = item;
            let count = 1;
            while (set.has(num + 1)) {
                count++;
                num++;
            }
            maxCount = Math.max(count, maxCount);
        }
    }

    return maxCount;
};