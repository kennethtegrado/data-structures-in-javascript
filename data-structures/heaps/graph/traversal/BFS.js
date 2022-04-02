const BFS = (graph, startingNode) => {
    const queue = [];
    const result = [];
    const visited = {};

    queue.push(startingNode);
    while (queue.length) {
        // Dequeue
        const node = queue.shift();

        // Check if the node is already visited
        if (visited[node]) continue;

        // Push our node
        result.push(node);

        // Mark node as visited
        visited[node] = true;

        // Iterate every vertices of node
        for (const x of graph[node]) if (!visited[x]) queue.push(x);
    }

    return result;
};

// SAMPLE IMPLEMENTATION
const graph1 = {
    Tokyo: ['Manila', 'Singapore', 'Beijing'],
    Manila: ['Tokyo', 'Bangkok'],
    Singapore: ['Tokyo'],
    Beijing: ['Tokyo', 'Moscow'],
    Bangkok: ['Manila'],
    Moscow: ['Moscow'],
};

const graph2 = {
    Aubrey: ['Kenneth', 'Guil', 'Donna', 'Bella', 'Luke', 'Paolo'],
    Kenneth: ['Aubrey', 'Donna', 'John', 'Sean'],
    John: ['Kenneth', 'Sean', 'France'],
    Sean: ['Kenneth', 'John', 'France'],
    France: ['Kenneth', 'Sean', 'John'],
    Donna: ['Aubrey', 'Kenneth'],
    Guil: ['Luke', 'Aubrey', 'Bella'],
    Bella: ['Luke', 'Guil', 'Aubrey'],
    Luke: ['Bella', 'Aubrey', 'Guil', 'Paolo'],
    Paolo: ['Aubrey', 'Luke'],
};

console.log(BFS(graph1, 'Manila'));
console.log(BFS(graph2, 'Sean'));
