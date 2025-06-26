/**
 * @param {number[][]} mat
 * @return {number[]}
 */

 function findMaxIndex(mat = [], col) {
  let n = mat.length;
  let maxValue = -1;
  let index = -1;
  for (let i = 0; i < n; i++) {
    if (mat[i][col] > maxValue) {
      maxValue = mat[i][col];
      index = i;
    }
  }
  return index;
}
var findPeakGrid = function(mat) {
     let m = mat[0].length;
  let low = 0;
  let high = m - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let row = findMaxIndex(mat, middle);
    let left = middle - 1 >= 0 ? mat[row][middle - 1] : -1;
    let right = middle + 1 < m ? mat[row][middle + 1] : -1;
    if (mat[row][middle] > left && mat[row][middle] > right) {
      return [row, middle];
    }
    if (mat[row][middle] < left) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return [-1, -1];
};