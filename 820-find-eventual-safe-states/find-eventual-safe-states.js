/**
 * @param {number[][]} graph
 * @return {number[]}
 */

 function dfs(sr, adj, visited, result){
        visited[sr] = 2;
        for(const node of adj[sr]){
            if(!visited[node]){
                if(dfs(node, adj, visited, result)) return true;
            }else if(visited[node] === 2)return true;
        }
        visited[sr] = 1;
        result.push(sr);
        return false;
    }

var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const result = [];
     const visited = new Array(n).fill(0);
        for(let i = 0 ; i<n; i++){
            if(!visited[i]){
                dfs(i, graph, visited, result);
            }
        }
        return result.sort((a,b) => a - b);
};