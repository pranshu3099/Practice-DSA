/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

function zeroOneMatrix(mat, distance, visited, queue){
    const n = mat.length;
    const m = mat[0].length
    let count = 0;
    while(count < queue.length){
        const [r, c, step] = queue[count++];
        distance[r][c] = step;
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for(const [dr, dc] of directions){
            const nr = dr + r;
            const nc = dc + c;
            if (nr >= 0 && nr < n && nc >= 0 && nc < m && 
                !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc, step + 1])
          }
        }
    }
}


var updateMatrix = function(mat) {
    const row = mat.length;
    const col = mat[0].length;
    const distance = Array.from({length: row}, (_, i) => [...mat[i]]);
    const visited = Array.from({length:row}, () => Array(col).fill(false));
    const queue = [];
    for(let i = 0; i< row ; i++){
        for(let j = 0 ; j< col; j++){
            if(mat[i][j] === 0){
                visited[i][j] = true;
                queue.push([i, j, 0]);
            }
        }
    }
    zeroOneMatrix(mat, distance, visited, queue)
    return distance;
};