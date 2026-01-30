/**
 * @param {character[][]} grid
 * @return {number}
 */
function getNumberOfIslands(grid, visited, i, j){
    let n = grid.length;
    let m = grid[0].length;
    let queue = [];
    visited[i][j] = true
    queue.push([i,j]);
    while(queue.length > 0){
        let [row, col] = queue.shift();
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for(const [delrow, delcol] of directions){
            let nrow = row + delrow;
            let ncol  = col + delcol;
            if(nrow >= 0 && nrow < n && ncol >= 0 && ncol < m 
            && grid[nrow][ncol] === "1" && !visited[nrow][ncol]){
                visited[nrow][ncol] = true;
                queue.push([nrow, ncol])
            }
        }
    }
}


var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({length:rows},() => Array(cols).fill(false));
    let count = 0;
    for(let i = 0 ; i<rows ; i++){
        for(let j = 0; j<cols; j++){
            if(grid[i][j] === "1" && !visited[i][j]){
                count++;
                getNumberOfIslands(grid, visited, i, j);
            }
        }
    }
    return count;
};