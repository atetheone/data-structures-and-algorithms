const graph = require('./graph').graph;

const has_path = (graph, source, destination) => {
    if (source === destination) return true;

    for (let neighbor of graph[source]) {
        if (has_path(graph, neighbor,  destination))
            return true;
    }
    return false;
};

const has_path2 = (graph, source, destination) => {
    let queue = [ source ];

    while (queue.length > 0) {
        let current  = queue.shift();
        if (current === destination)
            return true;
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
};




console.log(has_path2(graph, 'a', 'g'))