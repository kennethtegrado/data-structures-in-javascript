class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    // ADD VERTEX IMPLEMENTATION
    addVertex(vertex) {
        // Check if the vertex does not exist in our adjacency list
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // ADD EDGE IMPLEMENTATION
    addEdge(vertex1, vertex2, weight) {
        // Check if any of our vertex exists
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // Add an edge to our vertex 1
            this.adjacencyList[vertex1].push({ node: vertex2, weight });

            // Add an edge to our vertex 2
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        }
    }
}

// SAMPLE IMPLEMENTATION
