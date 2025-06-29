/**
 * @param {number} n
 * @return {string[][]}
 */

function solve(col, board, ans, leftRow, upperDiagonal, LowerDiagonal, n) {
  if (col === n) {
    ans.push(board.map((row) => row.join(",").split(",").join("")));
    return;
  }
  for (let row = 0; row < n; row++) {
    if (
      leftRow[row] === 0 &&
      LowerDiagonal[row + col] === 0 &&
      upperDiagonal[n - 1 + col - row] === 0
    ) {
      board[row][col] = "Q";
      leftRow[row] = 1;
      LowerDiagonal[row + col] = 1;
      upperDiagonal[n - 1 + col - row] = 1;
      solve(col + 1, board, ans, leftRow, upperDiagonal, LowerDiagonal, n);
      board[row][col] = ".";
      leftRow[row] = 0;
      LowerDiagonal[row + col] = 0;
      upperDiagonal[n - 1 + col - row] = 0;
    }
  }
}
var solveNQueens = function(n) {
let ans = [];
let board = new Array(n).fill(null).map(() => new Array(n).fill("."));
let leftRow = new Array(n).fill(0);
let upperDiagonal = new Array(2 * n - 1).fill(0);
let LowerDiagonal = new Array(2 * n - 1).fill(0);
solve(0, board, ans, leftRow, upperDiagonal, LowerDiagonal, n);
return ans;
};