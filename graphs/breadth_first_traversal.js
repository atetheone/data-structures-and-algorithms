const graph = require('./graph').graph;

const bft = (graph, source) => {
    let queue = [ source ];
    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
};

bft(graph, 'a');