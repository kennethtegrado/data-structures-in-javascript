// NODE IMPLEMENTATION
class Node {
    // Initialize it with a value
    constructor(val) {
        // MEMBERS OF A NODE

        // val for value
        this.val = val;

        // next for pointer
        this.next = null;
    }
}

// SINGLE LINKED LIST IMPLEMENTATION
class SingleLinkedList {
    // When we initialize the linked list, we invoke its instances with the length, head, and tail property
    constructor() {
        // Use the length property to determine the size of a list
        this.length = 0;

        // Use the tail property as a pointer to the last element of the linked lists
        this.tail = null;

        // Use the head property as a pointer to the first element of the linked lists
        this.head = null;
    }

    // PUSH IMPLEMENTATION
    push(val) {
        // Create an instance of the new node
        const newNode = new Node(val);

        // Check if our linked list is empty
        if (!this.head) {
            // If it's empty then we are dealing with a new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If it's not a new node then what we need to do is just set the current pointer of the node at our tail pointer to the newNode from previously NULL
            // Set our tail pointer to our new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // Increment our length
        this.length++;
        return this;
    }

    // POP IMPLEMENTATION
    pop() {
        // Check if our list is empty
        if (!this.head) return undefined;

        // Se out current to our head for traversing
        let current = this.head;

        // Use this as a second pointer that will help us in removing our tail node
        let previous;

        // This loop will run until we reach our tail with a pointer pointing at null
        // TRAVERSING
        while (current.next) {
            // Every iteration of the loop

            // Set our previous pointer to our current node
            previous = current;

            // Set current pointer to our next node
            current = current.next;
        }

        // After the loop is done
        // We set our tail to previous which is one node less than our current
        this.tail = previous;

        // Set its pointer to next
        this.tail.next = null;

        // Decrement our length
        this.length--;

        // Check if our list is actually empty
        if (this.length === 0) {
            // Set all our pointers to empty
            this.head = null;
            this.tail = null;
        }

        // Return the last node that was removed
        return current;
    }

    // SHIFT IMPLEMENTATION
    shift() {
        // Check if our list is empty
        if (!this.head) return undefined;

        // Set our current node to our first node
        let current = this.head;
        // Set the pointer of the first node to null
        current.next = null;

        // Move our head pointer to the next node
        this.head = this.head.next;

        // Decrement
        this.length--;

        // If our list is empty then set the tail pointer to null
        if (this.length === 0) this.tail = null;

        // Return the element that we removed
        return current;
    }

    // UNSHIFT IMPLEMENTATION
    unshift(val) {
        // Create a new instance of our node
        const newNode = new Node(val);

        // Check first if our list is actually empty
        if (!this.head) {
            // If it's empty then we are dealing with a newly created list so set the header and pointer to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the pointer of our new node to the first node in our list
            newNode.next = this.head;

            // Make our new node the first node in our list
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

        // Set our node to our first node
        let node = this.head;

        // Traverse every node in our linked lists
        for (let i = 0; i < index; i++) node = node.next;

        // Return the node
        return node;
    }

    // SET IMPLEMENTATION
    set(val, index) {
        // Just get the node from our get method
        const foundNode = this.get(index);

        // If foundNode is null then it means that we weren't able to set the value of our node
        if (!foundNode) return false;

        // change the value of the node that we got from the get method
        foundNode.val = val;

        // Return true
        return true;
    }

    // INSERT IMPLEMENTATION
    insert(val, index) {
        // O(N)
        // Check if we have a valid index
        if (index < 0 || index > this.length) return false;
        // If our index is equal to our length then we just need to push it to our list
        else if (index === this.length) {
            return !!this.push(val);
        }
        // If our index is equal to 0 then we just need to unshift our list with the value
        else if (index === 0) {
            return !!this.unshift(val);
        }
        // If insertion is somewhere between our tail and head nodes
        // Get the preceding node where we want to do our insert
        const previousNode = this.get(index - 1);

        // Create a new instance of our node
        const newNode = new Node(val);

        // set the pointer of our new node to the pointer of previousNode
        newNode.next = previousNode.next;

        // Change the pointer of our previousNode to newNode
        previousNode.next = newNode;

        // Increment
        this.length++;
        return true;
    }

    // REMOVE IMPLEMENTATION
    remove(index) {
        // O(n)

        // Check if we have a valid index
        if (index < 0 || index >= this.length) return undefined;
        // If our index is equal to our last node then just pop it
        else if (index === this.length - 1) return this.pop();
        // If our index is at the first node then just shift it
        else if (index === 0) return this.shift();
        else {
            // Find the preceding node before our removal
            const previousNode = this.get(index - 1);

            // Get the node that we are going to remove
            const removeNode = previousNode.next;

            // Set the pointer of our previous node to the pointer of our next node
            previousNode.next = removeNode.next;

            // Decrement
            this.length--;
            return removeNode;
        }
    }

    // REVERSE IMPLEMENTATION
    reverse() {
        // Set node to our head (USE THIS FOR TRAVERSING)
        let node = this.head;

        // Change our head to our tail
        this.head = this.tail;

        // Set our tail to our previously first node
        this.tail = node;

        // Initialize our two pointers for traversing
        let prev = null;
        let next = null;

        // Create a loop
        for (let i = 0; i < this.length; i++) {
            // Set the pointer of next to our next node
            next = node.next;

            // Set the pointer of node to our previous pointer
            node.next = prev;

            // Set previous to our current node
            prev = node;

            // Set our current node to the next node
            node = next;
        }

        // Return this list
        return this;
    }

    // DISPLAY IMPLEMENTATION
    display() {
        // O(n)

        // Use this array to store the values of all our elements
        const data = [];

        // Set node that we are currently on to our first node
        let current = this.head;

        // Traverse every element at our node
        while (current.next) {
            // Push the value of current node
            data.push(current.val);
            // Set the current node to our next node until we reach the tail
            current = current.next;
        }

        // Print our data to our console
        console.log(data);
    }
}
