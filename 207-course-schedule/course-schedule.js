/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


function addEdge(source, destination, Indegree, adjList){
    adjList[source].push(destination)
    Indegree[destination]++;
}

function checkForIndgree(Indegree, queue){
    for(let i = 0; i < Indegree.length; i++){
        if(Indegree[i] === 0){
            Indegree[i] = -1;
            queue.push(i);
        }
    }
}

function courseSchedule(queue, Indegree, topoSort, adjList){
    let index = 0;
    while(index < queue.length){
        let node = queue[index];
        index++;
        topoSort.push(node);
        for(vertex of adjList[node] || []){
            Indegree[vertex] = Indegree[vertex] - 1 ;
        }
        checkForIndgree(Indegree, queue);
    }
}

var canFinish = function(numCourses, prerequisites) {
    
    let n = numCourses;
    let adjList = new Array(n).fill(null).map(()=>[]);
    let Indegree = new Array(n).fill(null).map(()=>0);
    let topoSort = [];
    let queue = [];

    for(let [dest, src] of prerequisites){
        addEdge(src, dest, Indegree, adjList);
    }

    checkForIndgree(Indegree, queue);
    courseSchedule(queue, Indegree, topoSort, adjList);

    if(topoSort.length === n)return true;
    return false;
};