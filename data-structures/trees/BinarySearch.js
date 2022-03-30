class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    // INSERT IMPLEMENTATION
    insert(val) {
        const node = new Node(val);

        // Check if we have a root
        if (!this.root) this.root = node;
        else {
            // Use this for traversing
            let current = this.root;

            // Use the loop for traversing
            while (true) {
                // Check if our current node's value is greater than the current value
                if (current.value > val) {
                    // Check if our left child is null
                    if (!current.left) {
                        current.left = node;
                        break;
                    }
                    // Update current traversal node
                    else current = current.left;
                } else if (current.value < val) {
                    // Check if our right child is null
                    if (!current.right) {
                        current.right = node;
                        break;
                    }
                    // Update the current traversal node
                    else current = current.right;
                }
                // If our value is already in our tree then return
                else return this;
            }
        }

        // Increment
        this.size++;
        return this;
    }

    // FIND IMPLEMENTATION
    find(val) {
        // Check if our tree is empty
        if (!this.root) return false;

        // Use this node for traversing
        let current = this.root;

        while (current) {
            // Check if our current node's value is less than val
            if (current.value > val) current = current.left;
            // Check if our current value is greater than val
            else if (current.value < val) current = current.right;
            // If our current node's value is equal to val then return the node
            else return current;
        }
        return false;
    }
}

// SAMPLE RUN
const tree = new BinarySearchTree();

// Inserting nodes to our tree
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(7);
tree.insert(11);
tree.insert(16);

console.log(tree.find(11));
console.log(tree);
