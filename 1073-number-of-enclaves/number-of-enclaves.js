/**
 * @param {number[][]} grid
 * @return {number}
 */

function bfs(queue, visited, grid){
    const n = grid.length;
    const m = grid[0].length;
    let step = 0;

    while(step < queue.length){
        const [r, c] = queue[step++];
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for(const [dr, dc] of directions){
        const nr = dr + r;
        const nc = dc + c;
        if (nr >= 0 && nr < n && nc >= 0 && nc < m && !visited[nr][nc]
           && grid[nr][nc] === 1){
            queue.push([nr, nc]);
            visited[nr][nc] = true;
        }
     }
    }

}

var numEnclaves = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const visited = Array.from({length:n}, () => Array(m).fill(false));
    const queue = [];
    let count = 0;
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(i === 0 || j === 0 || i === n-1 || j === m-1 ){
                if(grid[i][j] === 1){
                    queue.push([i,j]);
                    visited[i][j] = true;
                }
            }
        }
    }
       
    bfs(queue, visited, grid);

    for(let i = 0; i< n ;i++){
        for(let j = 0; j<m; j++){
            if(grid[i][j] === 1 && !visited[i][j]){
                count++;
            }
        }
    }

    return count;



};