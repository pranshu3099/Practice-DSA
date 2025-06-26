/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0;
    let coloumn = m-1;
    while(row < n && coloumn >= 0){
        if(matrix[row][coloumn] === target)return true;
        if(matrix[row][coloumn] < target){
            row++;
        }else{
            coloumn--;
        }
    }
    return false;
};