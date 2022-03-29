class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        // Initialize a new instance of a new
        const node = new Node(val);

        // Check if the queue is the empty
        if (!this.size) {
            this.head = node;
            this.last = node;
        } else {
            // Make the new node the last node
            this.last.next = node;
            this.last = node;
        }

        // Increment
        this.size++;
        return this.size;
    }

    dequeue() {
        // Check if the list is empty
        if (!this.size) return null;

        // Create a new node
        const node = this.first;

        // Check if our node is the only node
        if (this.first === this.last) {
            // Set the last to null
            this.last = null;
        }

        // Update our first to the next
        this.first = this.first.next;

        // Decrement
        this.size--;
        return node.value;
    }
}
