// NAIVE IMPLEMENTATION
class NaivePriorityQueue {
    constructor() {
        this.values = [];
    }

    // ENQUEUE
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    // DEQUEUE
    dequeue() {
        return this.values.shift();
    }

    // SORT
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// UTILIZES MIN HEAP
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // ENQUEUE IMPLEMENTATION
    enqueue(val, priority) {
        const node = new Node(val, priority);

        // Push our node to our queue
        this.values.push(node);

        // BUBBLING UP
        let index = this.length - 1;

        const addedNode = this.values[index];

        while (index > 0) {
            // Get the parent index
            const parentIndex = Math.floor((index - 1) / 2);

            // Get the parent node
            const parentNode = this.values[parentIndex];

            // Check if new node's priority is greater than its parents priority
            if (addedNode.priority >= parentNode.priority) break;

            // SWAPPING
            this.values[parentIndex] = addedNode;

            this.values[index] = parentNode;

            // Update the value of our index
            index = parentIndex;
        }

        return this;
    }

    // DEQUEUE IMPLEMENTATION
    dequeue() {
        // Check if we have an empty queue
        if (!this.values.length) return undefined;

        // Check if we are dealing with the last element in our queue
        if (!this.values.length === 1) return this.values.shift();

        // Get our highest priority node
        const firstNode = this.values[0];

        // Get our lowest priority element
        const lastNode = this.values.pop();

        // Updating our first node
        this.values[0] = lastNode;

        // Index of our first node
        let index = 0;

        // BUBBLING DOWN
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let leftNode,
                rightnode,
                swap = null;

            // Check if we have a valid left index
            if (left < this.values.length) {
                // Get our left node
                leftNode = this.values[left];

                // Swap if priority of left child is low
                if (leftNode.priority < lastNode.priority) swap = left;
            }

            // Check if we have a valid right index
            if (right < this.values.length) {
                // Right children
                rightnode = this.values[right];

                // Check if there's already a swap before this condition
                if (swap && rightnode.priority < lastNode.priority) {
                    // Check if left children's priority is greater than right children
                    if (leftNode.priority > rightnode.priority) swap = right;
                }

                // Check if we should swap right child with parent child
                else if (rightnode.priority < lastNode.priority) swap = right;
            }

            // Check if there are swaps
            if (!swap) break;

            // SWAPPING
            this.values[index] = this.values[swap];

            this.values[swap] = lastNode;

            // Updating index
            index = swap;
        }

        return firstNode;
    }

    // Getting the length of our queue
    get length() {
        return this.values.length;
    }
}

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

    // DIJKSTRA'S ALGORITHM
    shortestPath(start, end) {
        // Heap for determining where should we go next
        const priority = new PriorityQueue();

        // Storage for  shortest distances
        const distances = {};

        // Tracker so we know where we came from
        const previous = {};

        // Variable for holding the variable that we are iterating
        let currentNode;

        // Initialized every vertex
        for (let x in this.adjacencyList) {
            if (x !== start)
                // Add our vertices to our shorest distance tracker
                distances[x] = Infinity;
            else {
                // Set the value of our starting vertex to 0
                distances[x] = 0;

                // Enqueue it at 0 to ensure that it will be the first dequeued vertex
                priority.enqueue(x, 0);
            }
            // Add our vertices to our previous tracker
            previous[x] = null;
        }

        // We apply the logic of dijkstra's algorithm
        while (priority.values.length) {
            // Dequeue
            currentNode = priority.dequeue().val;

            // If we already found our edge then we are done checking
            if (currentNode === end) break;

            // Check if currentNode exist and its distance is not equal to infinity
            if (currentNode || distances[currentNode] !== Infinity) {
                // For every neighbour that the currentNode vertex has
                for (const neighbor in this.adjacencyList[currentNode]) {
                    // Get the node of our neighbour
                    let nextNode = this.adjacencyList[currentNode][neighbor];

                    // Candidate distance
                    let candidate = distances[currentNode] + nextNode.weight;

                    // Check if our candidate distance is smaller than our already stored distance
                    if (candidate < distances[nextNode.node]) {
                        // Update our shortest distance
                        distances[nextNode.node] = candidate;

                        // Update previous
                        previous[nextNode.node] = currentNode;

                        // Enqueue
                        priority.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        let direction = [];
        let node = end;
        direction.push(node);
        while (previous[node]) {
            direction.push(previous[node]);
            node = previous[node];
        }

        return { direction: direction.reverse(), shortest: distances[end] };
    }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

const vertex1 = 'A';
const vertex2 = 'E';
const { direction, shortest } = graph.shortestPath(vertex1, vertex2);
console.log(direction);
console.log(
    `The shortest path from vertex ${vertex1} to ${vertex2} is ${shortest}`
);
