/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const Dfs = function (
  grid,
  gridCopy,
  sr,
  sc,
  newColor,
  initialColor,
  rowLength,
  colLength
) {
  gridCopy[sr][sc] = newColor;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let [delrow, delcol] of directions) {
    const neigbourRow = delrow + sr;
    const neigbourCol = delcol + sc;

    if (
      neigbourRow >= 0 &&
      neigbourRow < rowLength &&
      neigbourCol >= 0 &&
      neigbourCol < colLength &&
      grid[neigbourRow][neigbourCol] === initialColor &&
      gridCopy[neigbourRow][neigbourCol] !== newColor
    ) {
      Dfs(
        grid,
        gridCopy,
        neigbourRow,
        neigbourCol,
        newColor,
        initialColor,
        rowLength,
        colLength
      );
    }
  }
};

var floodFill = function(image, sr, sc, color) {
  let m = image.length;
  let n = image[0].length;
  let gridCopy = image.map((row) => [...row]);
  let initialColor = image[sr][sc];
  if (initialColor === color) return gridCopy;
  Dfs(image, gridCopy, sr, sc, color, initialColor, m, n);
  return gridCopy;
};