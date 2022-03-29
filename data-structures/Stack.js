class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // PUSH IMPLEMENTATION
    push(val) {
        // Create a new instance of a node
        const node = new Node(val);

        // Check if we have an empty list
        if (!this.size) {
            // Set the head and tail to our new instance of node
            this.first = node;
            this.last = node;
        } else {
            // Set the next pointer of Node to our current first node
            const temp = this.first;

            // Update the head pointer to our newly created node
            this.first = node;

            // Set next of current head to temp
            this.first.next = temp;
        }

        // Increment
        this.size++;
        return this.size;
    }

    // POP IMPLEMENTATION
    pop() {
        // Check if fix is empty
        if (!this.size) return null;

        // Set the node to our first node
        const node = this.first;

        // Check if we only have one node
        if (this.size === this.last) {
            this.last = null;
        }

        // Update  the value of our first node
        this.first = this.first.next;

        this.size--;
        return node.value;
    }

    // PEEK IMPLEMENTATION
    peek() {
        // Check if size is empty
        if (!this.size) return undefined;

        // RETURN THE VALUE OF OUR FIRST NODE
        return this.first.value;
    }

    // EMPTY IMPLEMENTATION
    empty() {
        return !this.size;
    }
}
