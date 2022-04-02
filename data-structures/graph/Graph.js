class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // ADD VERTEX IMPLEMENTATION
    addVertex(vertex) {
        // Use this function to add a vertex to our list

        // Ensure that a vertex is not in the list
        if (!this.addVertex[vertex])
            // Adding a vertex to our list
            this.adjacencyList[vertex] = [];
    }

    // ADD EDGE IMPLEMENTATION
    addEdge(vertex1, vertex2) {
        // Building our edge
        this.adjacencyList[vertex1].push(vertex2);

        this.adjacencyList[vertex2].push(vertex1);
    }

    // REMOVE AN EDGE
    removeEdge(v1, v2) {
        // Check if both of the vertices exist
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            // Remove the connection in vertice 1 and vertice 2
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(
                (item) => item !== v2
            );

            // Remove the connection in vertice 2 and vertice 1
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(
                (item) => item !== v1
            );
        }
    }

    // REMOVING A VERTEX
    removeVertex(vertex) {
        for (const x of this.adjacencyList[vertex]) this.removeEdge(vertex, x);

        delete this.adjacencyList[vertex];
    }
}

// SAMPLE RUN
const graph = new Graph();
graph.addVertex('Aubrey');
graph.addVertex('Kenneth');
graph.addVertex('Guil');
graph.addVertex('Bella');
graph.addEdge('Aubrey', 'Kenneth');
graph.addEdge('Guil', 'Aubrey');
graph.addEdge('Bella', 'Aubrey');
graph.addEdge('Guil', 'Bella');
console.log(graph.adjacencyList);
