// NODE IMPLEMENTATION OF DOUBLE LINKED LIST
class Node {
    constructor(val) {
        // MEMBERS OF THE NODE CLASS

        // VAL, NEXT, PREV
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // PUSH IMPLEMENTATION
    push(val) {
        // Create an instance of our node
        const newNode = new Node(val);
        // Check if our list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the pointer of the node of tail to our newly created node
            this.tail.next = newNode;

            // Set the previous pointer of newly created node to our tail node
            newNode.prev = this.tail;

            // Set tail to our newly created node
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // POP IMPLEMENTATION
    pop() {
        // Check if the list is empty
        if (!this.head) return undefined;

        // Store the last node to a variable
        const node = this.tail;

        // Check if the length of the list is 1
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Set the connection of the preceding node to null
            node.prev.next = null;

            // Set tail to the preceding node
            this.tail = node.prev;

            // Remove the connection of the removed node from the preceding node
            node.prev = null;
        }
        this.length--;
        return node;
    }
}
