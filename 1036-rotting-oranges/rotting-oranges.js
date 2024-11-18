/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let queue = [];
  let freshOranges = 1;
  let time = 0;

  let freshCount = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]); 
      } else if (grid[i][j] === 1) {
        freshCount++;
      }
    }
  }

  while (queue.length) {
    const [currRow, currCol, currTime] = queue.shift();
    const directions = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];

    for (let [delrow, delcol] of directions) {
      const neighborRow = delrow + currRow;
      const neighborCol = delcol + currCol;

      if (
        neighborRow >= 0 &&
        neighborRow < m &&
        neighborCol >= 0 &&
        neighborCol < n &&
        grid[neighborRow][neighborCol] === 1
      ) {
        grid[neighborRow][neighborCol] = 2; // Rot the orange
        freshCount--;
        queue.push([neighborRow, neighborCol, currTime + 1]);
        time = Math.max(time, currTime + 1);
      }
    }
  }

  return freshCount === 0 ? time : -1;
};