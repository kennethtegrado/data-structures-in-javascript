const iterativeDFS = (graph, startingNode) => {
    const stack = [];
    const result = [];
    const visited = {};
    stack.push(startingNode);
    while (stack.length) {
        // Pop our node
        const node = stack.pop();

        // Check if the node is already visited
        if (!visited[node]) {
            // Push the result
            result.push(node);

            // Mark node as visited
            visited[node] = true;

            // Push all connected nodes to stack
            graph[node].forEach((item) => stack.push(item));
        }
    }

    return result;
};

// SAMPLE RUN
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

console.log(iterativeDFS(graph1, 'Manila'));
console.log(iterativeDFS(graph2, 'Sean'));
