const graph = require('./graph').graph;

const dft = (graph, source) => {
    if (!graph) return [];

    let ret = "";

    let stack = [source];
    
    while (stack.length > 0) {
        let currentNode  = stack.pop() || '';
        ret += currentNode;
        for (let neighbor of graph[currentNode]) {
            stack.push(neighbor);
        }
    }

    return ret.split('')
}

console.log(dft(graph, 'a'));