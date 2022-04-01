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
}
