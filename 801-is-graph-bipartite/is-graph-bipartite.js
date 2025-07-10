/**
 * @param {number[][]} graph
 * @return {boolean}
 */

let checkIfBipartite = function(graph, n){
    let color = new Array(n).fill(null).map(()=>-1);
      for (let i = 0; i < n; i++) {
      if (color[i] === -1) {
        let queue = [];
        queue.push(i);
        color[i] = 0;
        let index = 0;
        while (index < queue.length) {
          let parent = queue[index];
          index++;
          let parentColor = color[parent];
          for (const node of graph[parent]) {
            if (color[node] === -1) {
              color[node] = parentColor === 1 ? 0 : 1;
              queue.push(node);
            } else {
              if (color[node] === parentColor) return false;
            }
          }
        }
      }
    }
    return true;
}


var isBipartite = function(graph) {
    let n = graph.length;
    let ans = checkIfBipartite(graph, n)
    return ans;
};