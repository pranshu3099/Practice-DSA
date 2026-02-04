/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

function dfs(sr, visited, adj, result){
    visited[sr] = 2;
    for(const node of adj[sr]){
        if(!visited[node]){
           if(dfs(node, visited, adj, result)) return true;
        }if(visited[node] === 2) return true;
    }
    visited[sr] = 1;
    result.push(sr);
    return false;
}


var findOrder = function(numCourses, prerequisites) {
    const adj = Array.from({length:numCourses}, () => []);
    const visited = new Array(numCourses).fill(0);
    const result = [];
    for(const [courses, prereq] of prerequisites){
        adj[prereq].push(courses);
    }

    for(let i = 0; i<numCourses; i++){
        if(!visited[i]){
              if(dfs(i, visited, adj, result)) {
                return []; 
            }
        }
    }
    return result.reverse();
};