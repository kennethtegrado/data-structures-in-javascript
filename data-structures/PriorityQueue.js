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

// SAMPLE RUN
const ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('tetanus', 2);
ER.enqueue('rabies', 2);
ER.enqueue('head injury', 1);
ER.enqueue('dengue', 3);
ER.enqueue('covid-19 patient', 1);
ER.enqueue('open wound', 4);
ER.dequeue();
console.log(ER);
