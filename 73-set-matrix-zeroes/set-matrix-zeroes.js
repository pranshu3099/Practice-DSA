/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowLength = matrix.length
    let columnLength = matrix[0].length
    let row = Array(rowLength).fill(0);
    let column = Array(columnLength).fill(0);
    for(let i=0;i<rowLength;i++){
        for(let j=0;j<columnLength;j++){
            if(matrix[i][j]===0){
                row[i] =1;
                column[j] =1;
            }
        }
    }

      for(let i=0;i<rowLength;i++){
        for(let j=0;j<columnLength;j++){
            if(row[i] || column[j]){
               matrix[i][j] = 0;
            }
        }
    }
};