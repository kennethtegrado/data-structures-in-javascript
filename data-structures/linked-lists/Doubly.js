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

        // Increment
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

        // Decrement
        this.length--;
        return node;
    }

    // SHIFT IMPLEMENTATION
    shift() {
        // CHECK IF THE LIST IS EMPTY
        if (!this.head) return undefined;

        const node = this.head;
        // Check if the node is a first node
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Set the head to the next node
            this.head = node.next;

            // Remove the connection
            this.head.prev = null;
            node.next = null;
        }

        // Decrement
        this.length--;
        return node;
    }

    // UNSHIFT IMPLEMENTATION
    unshift(val) {
        // Create a new node
        const newNode = new Node(val);

        // Check if this is the first node
        if (!this.head) {
            // Point the tail and head to the newNode
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the connection of the previous node to our newNode
            this.head.prev = newNode;

            // Set the pointer of newNode to our head node
            newNode.next = this.head;

            // Update head
            this.head = newNode;
        }

        // Increment
        this.length++;
        return this;
    }

    // GET IMPLEMENTATION
    get(index) {
        // Check if we have a valid index
        if (index < 0 || index >= this.length) return null;

        // Get the middle of index of our list
        const middle = Math.floor((this.length - 1) / 2);

        // Initialize node
        let node;

        // Check if our index is less than our middle
        if (index <= middle) {
            // set our starting node to our head
            node = this.head;

            // Loop through our nodes until we reach index
            for (let i = 0; i < index; i++) {
                node = node.head.next;
            }
        } else {
            // Set our starting node to our tail
            node = this.tail;

            // Loop through our nodes until we reach length - index
            for (let i = 0; i < this.length - index; i++) {
                node = node.prev;
            }
        }
        return node;
    }

    // SET IMPLEMENTATION
    set(val, index) {
        // Get the node
        const node = this.get(index);

        // Check if a node exists
        if (!node) return false;

        // Update the value of the node
        node.val = val;
        return true;
    }

    // INSERT IMPLEMENTATION
    insert(val, index) {
        // Check if we have valid index
        if (index < 0 || index > this.length) return false;

        if (index === this.length) {
            // If our index is equal to length then just push it
            return !!this.push(val);
        } else if (index === 0) {
            // Unshift if we want to insert at the front
            return !!this.unshift(val);
        }
        // Create a new instance of the node
        const newNode = new Node(val);

        // Find the previous node before the index
        const previousNode = this.get(index - 1);

        // Get the nextNode after insertion
        const nextNode = previousNode.next;

        // Set the next previousNode to newNode
        previousNode.next = newNode;

        // Set the previous of newNode to previousNode
        newNode.prev = previousNode;

        // Set the next of our new Node to the nextNode
        newNode.next = nextNode;

        // Set the previous of nextNode to newNode
        nextNode.prev = newNode;

        // Increment
        this.length++;
        return true;
    }

    // REMOVE IMPLEMENTATION
    remove(index) {
        // Check if we have a valid index
        if (index < 0 || index >= this.length) return undefined;

        // Check if we are dealing with a first node
        if (index === 0) return this.shift();

        // Check ifi we are dealing with a last node
        if (index === this.length - 1) return this.pop();

        // Get the three nodes
        const node = this.get(index);
        const nextNode = node.next;
        const prevNode = node.prev;

        // Establish the connection with our nodes
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        // Remove the connection with null
        node.next = null;
        node.prev = null;

        // Decrement
        this.length--;
        return node;
    }

    // DISPLAY IMPLEMENTATION
    display() {
        // Use this variable to store our values in an array
        const data = [];

        // Use this for traversing
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            // Store the value of current node to our data array
            data.push(node.val);

            // Update the value of node
            node = node.next;
        }

        // Print the data to console
        console.log(data);
    }
}
