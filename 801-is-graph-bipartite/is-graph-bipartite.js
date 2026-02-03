/**
 * @param {number[][]} graph
 * @return {boolean}
 */

function bfs(graph, color, startingNode){
    const queue = [startingNode];
    color[startingNode] = 0;
    let start = 0;
    while(start < queue.length){
        const node = queue[start++];
        for(const adj of graph[node] || []){
            if(color[adj] === -1){
                color[adj] = 1 - color[node];
                queue.push(adj)
            }else if(color[adj] === color[node]) return false;
        }
    }

    return true;

}

var isBipartite = function(graph) {
    const n = graph.length;
    const color = new Array(n).fill(-1);
    
    for(let i = 0; i < n; i++){
        if(color[i] === -1){ 
            if(!bfs(graph, color, i)){ 
                return false; 
            }
        }
    }
    return true;
};