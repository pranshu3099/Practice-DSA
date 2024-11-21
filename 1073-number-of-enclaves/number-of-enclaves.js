/**
 * @param {number[][]} grid
 * @return {number}
 */
function Bfs(row, coloumn, visited, grid) {
  let m = grid.length;
  let n = grid[0].length;
  let queue = [];
  queue.push([row, coloumn]);
  visited[row][coloumn] = 1;

  while (queue.length) {
    const direction = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    const [currRow, currCol] = queue.shift();
    for (const [delRow, delCol] of direction) {
      const neigbourRow = delRow + currRow;
      const neigbourCol = delCol + currCol;

      if (
        neigbourRow >= 0 &&
        neigbourRow < m &&
        neigbourCol >= 0 &&
        neigbourCol < n &&
        !visited[neigbourRow][neigbourCol] &&
        grid[neigbourRow][neigbourCol] === 1
      ) {
        visited[neigbourRow][neigbourCol] = 1;
        queue.push([neigbourRow, neigbourCol]);
      }
    }
  }
}

var numEnclaves = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;
  let visited = Array.from({ length: m }, () => Array(n).fill(0));

  // traverse the first row and last row

  for (let j = 0; j < n; j++) {
    if (!visited[0][j] && grid[0][j] === 1) {
      Bfs(0, j, visited, grid);
    }

    if (!visited[m - 1][j] && grid[m - 1][j] === 1) {
      Bfs(m - 1, j, visited, grid);
    }
  }

  // traverse the first coloumn and last coloumn

  for (let i = 0; i < m; i++) {
    if (!visited[i][0] && grid[i][0] === 1) {
      Bfs(i, 0, visited, grid);
    }

    if (!visited[i][n - 1] && grid[i][n - 1] === 1) {
      Bfs(i, n - 1, visited, grid);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
};
