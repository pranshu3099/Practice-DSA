/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let low = 0;
    let high = arr.length-1;
    while(low <=high){
        let mid = Math.floor((low+high)/2);
        let missingCount = arr[mid] - (mid+1);
        if(missingCount < k){
            low = mid +1;
        }
        else{
            high = mid-1
        }
    }

    if(high === -1){
        return k;
    }
    let missingRight = arr[high] - (high+1);
    let missingNumber = arr[high] + (k-missingRight)
    return missingNumber
};