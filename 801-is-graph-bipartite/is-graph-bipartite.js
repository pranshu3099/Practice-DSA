/**
 * @param {number[][]} graph
 * @return {boolean}
 */

let checkIfBipartite = function(node,color,graph){
    let queue = [];
    queue.push(node);
    while (queue.length) {
      let parent = queue.shift();
      let parentColor = color[parent];
      let childArray = graph[parent]
      for (let i = 0; i < childArray.length; i++) {
        if (color[childArray[i]] === -1) {
          color[childArray[i]] = parentColor === 1 ? 0 : 1;
          queue.push(childArray[i]);
        } else {
          if (color[childArray[i]] === parentColor) return false;
        }
      }
    }
    return true;
}


var isBipartite = function(graph) {
    let n = graph.length;
    let color = new Array(n).fill(null).map(()=>-1);
    for(let i=0;i<n-1;i++){
          if(color[i]===-1){
            if(!checkIfBipartite(i,color,graph)){
            return false;
        }
      }
    }
    return true;
};