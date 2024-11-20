/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = (mat) => {
  let m = mat.length;
  let n = mat[0].length;
  let queue = [];
  let gridCopy = mat.map((row) => [...row]);
  let visited = Array.from({ length: m }, () => Array(n).fill(0));
  let distance = Array.from({ length: m }, () => Array(n).fill());

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (gridCopy[i][j] === 0) {
        queue.push([i, j, 0]);
        visited[i][j] = 1;
      }
    }
  }

  while (queue.length) {
    const [currRow, currCol, currDist] = queue.shift();
    distance[currRow][currCol] = currDist;
    let directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [delrow, delcol] of directions) {
      const neigbourRow = delrow + currRow;
      const neigbourCol = delcol + currCol;
      if (
        neigbourRow >= 0 &&
        neigbourRow < m &&
        neigbourCol >= 0 &&
        neigbourCol < n &&
        visited[neigbourRow][neigbourCol] !== 1
      ) {
        queue.push([neigbourRow, neigbourCol, currDist + 1]);
        visited[neigbourRow][neigbourCol] = 1;
      }
    }
  }
  return distance;
};