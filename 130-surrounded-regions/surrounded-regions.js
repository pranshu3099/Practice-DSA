/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function dfs(sr, sc, board, visited){
    let n = board.length;
    let m = board[0].length;
    visited[sr][sc] = true;
     const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
     for(const [dr, dc] of directions){
        const nr = dr + sr;
        const nc = dc + sc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < m && !visited[nr][nc]
           && board[nr][nc] === "O"){
           dfs(nr, nc, board, visited);

        }
     }
}


var solve = function(board) {
    const n = board.length;
    const m = board[0].length;
    const visited = Array.from({length:n}, () => Array(m).fill(false));
    
    // traverse first row and last row

    for(let j = 0 ;j< m ; j++ ){
        if(!visited[0][j] && board[0][j] === "O"){
            dfs(0 , j , board, visited);
        }if(!visited[n-1][j] && board[n-1][j] === "O"){
            dfs(n-1 , j , board, visited);
        }
    }

        // traverse first col and last col


    for(let i = 0 ;i< n ; i++ ){
        if(!visited[i][0] && board[i][0] === "O"){
            dfs(i , 0 , board, visited);
        }if(!visited[i][m-1] && board[i][m-1] === "O"){
            dfs(i , m-1 , board, visited);
        }
    }

    for(let i = 0 ; i<n ; i++){
        for(let j = 0 ; j< m; j++){
           if(board[i][j] === "O" && !visited[i][j]){
              board[i][j] = "X"
           }
        }
    }

};