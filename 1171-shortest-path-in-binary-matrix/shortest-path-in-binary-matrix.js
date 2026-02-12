var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    
    if(grid[0][0] === 1 || grid[n-1][m-1] === 1) return -1;
    
    const queue = [[1, [0, 0]]];
    grid[0][0] = 1;  
    let start = 0;
    
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],      
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];
    
    while(start < queue.length){
        const [currDistance, [row, col]] = queue[start++];
        
        if(row === n-1 && col === m-1){
            return currDistance;
        }
        
        for(const [delRow, delCol] of directions) {
            const newRow = row + delRow;
            const newCol = col + delCol;
            
            if(newRow >= 0 && newRow < n && newCol >= 0 && newCol < m
                && grid[newRow][newCol] === 0){ 
                
                grid[newRow][newCol] = 1;
                queue.push([currDistance + 1, [newRow, newCol]]);
            }
        }
    }
    
    return -1;
};