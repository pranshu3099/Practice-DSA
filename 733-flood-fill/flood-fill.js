/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

function checkfloodfill(image, newImage, visited, newColor, sr, sc){
    let n = image.length;
    let m = image[0].length;
    visited[sr][sc] = true;
    newImage[sr][sc] = newColor;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (const [dr, dc] of directions) {
      const nr = sr + dr;
      const nc = sc + dc;
      
      if (nr >= 0 && nr < n && nc >= 0 && nc < m && 
          image[nr][nc] === image[sr][sc] && !visited[nr][nc]) {
            checkfloodfill(image, newImage, visited, newColor, nr, nc);
          }
    }
    
}

var floodFill = function(image, sr, sc, color) {
    const rows = image.length;
    const cols = image[0].length;
    let newColor = color;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const newImage = Array.from({length: rows}, (_, i) => [...image[i]]);
    checkfloodfill(image, newImage, visited, newColor, sr, sc);
    return newImage;
};