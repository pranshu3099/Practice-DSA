/**
 * @param {number[][]} graph
 * @return {number[]}
 */

function getSafeStates(i, graph, visited, pathVisited, safeNodes){
    visited[i] = true;
    pathVisited[i] = true;
    for(const node of graph[i] || []){
        if(!visited[node]){
            if(getSafeStates(node, graph, visited, pathVisited, safeNodes))return true;
        }else if(pathVisited[node])return true;
    }

    pathVisited[i] = false;
    safeNodes[i] = true;
    return false;
}


var eventualSafeNodes = function(graph) {
    let n = graph.length;
    let visited = new Array(n).fill(null).map(()=>false);
    let pathVisited = new Array(n).fill(null).map(()=>false);
    let safeNodes = new Array(n).fill(null).map(() => false);
    let ans = [];

    for(let i = 0 ; i<n; i++){
        if(!visited[i]){
            getSafeStates(i, graph, visited, pathVisited, safeNodes);
        }
    }

    for(let i = 0 ; i<n; i++){
        if(safeNodes[i])ans.push(i);
    }
    return ans;

};