/**
 * @param {character[][]} grid
 * @return {number}
 */


let Bfs = function (row, col, visited, rowLength, colLength, grid) {
  visited[row][col] = 1;
  let queue = [];
  queue.push([row, col]);

  while (queue.length) {
    const [currRow, currCol] = queue.shift();

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let [delrow, delcol] of directions) {
      let neigbourRow = currRow + delrow;
      let neigbourCol = currCol + delcol;
      if (
        neigbourRow >= 0 &&
        neigbourRow < rowLength &&
        neigbourCol >= 0 &&
        neigbourCol < colLength &&
        grid[neigbourRow][neigbourCol] === "1" &&
        !visited[neigbourRow][neigbourCol]
      ) {
        visited[neigbourRow][neigbourCol] = 1;
        queue.push([neigbourRow, neigbourCol]);
      }
    }
  }
};


var numIslands = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let visited = Array.from({ length: m }, () => Array(n).fill(0));
  let count = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (!visited[row][col] && grid[row][col] === "1") {
        count++;
        Bfs(row, col, visited, m, n, grid);
      }
    }
  }
  return count;
};