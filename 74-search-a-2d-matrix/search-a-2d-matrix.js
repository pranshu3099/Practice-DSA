/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = 0;
    let high = n*m-1;
    while(low <= high){
        let middle = Math.floor((low+high)/2);
        let row = Math.floor(middle/m);
        let coloumn = middle % m;
        if(matrix[row][coloumn] === target) return true;
        if(target >= matrix[row][coloumn])low = middle +1;
        else high = middle -1
    }
    return false;
};