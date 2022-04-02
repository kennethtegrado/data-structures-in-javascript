const recursiveDfs = (graph, startingNode) => {
    const result = [];
    const visited = {};
    const recursion = (v) => {
        // Push our vertex to result
        result.push(v);
        visited[v] = true;

        // Check every vertices of our node
        for (const x of graph[v]) if (!visited[x]) recursion(x);
    };

    recursion(startingNode);
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

console.log(recursiveDfs(graph1, 'Manila'));
console.log(recursiveDfs(graph2, 'Sean'));
