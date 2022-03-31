class MaxHeap {
    constructor() {
        this.value = [];
        this.length = 0;
    }

    // INSERT IMPLEMENTATION
    insert(val) {
        // Push our value to our heap
        this.value.push(val);

        // Increment
        this.length++;

        // this.bubbleUp()
        // Set index of val
        let index = this.length - 1;
        const element = this.value[index];
        // Bubbling up
        while (index > 0) {
            // Get the parent index of our node
            const parentIndex = Math.floor((index - 1) / 2);

            // Get the parent element
            const parent = this.value[parentIndex];

            // Guard Clause
            if (element <= parent) break;

            // Swapping
            this.value[index] = parent;
            this.value[parentIndex] = element;

            // Update parent index
            index = parentIndex;
        }

        return this.value;
    }

    // REMOVE IMPLEMENTATION
    remove() {
        // Check if the list is empty
        if (!this.length) return undefined;

        // Check of if we are dealing with an only node
        if (this.length === 1) {
            this.length--;
            return this.value.shift();
        }

        // Get the first node
        const firstNode = this.value[0];

        // Get our last node
        const lastNode = this.value.pop();

        // Update our first node
        this.value[0] = lastNode;

        // Decrement
        this.length--;

        // Initialize our index
        let index = 0;

        // Bubbling down
        while (true) {
            // Get the index of the children
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            // Initialize children node
            let leftNode, rightNode;

            // Identifier if we swap any of our nodes
            let swap = null;

            // Check if left is less than length
            if (left < this.length) {
                leftNode = this.value[left];

                if (leftNode > lastNode) swap = left;
            }

            // Check if we have a valid right index
            if (right < this.length) {
                rightNode = this.value[right];

                if (
                    (!swap && rightNode > lastNode) ||
                    (swap && rightNode > lastNode)
                ) {
                    if (this.value[swap] && rightNode > this.value[swap])
                        swap = right;
                    else if (!this.value[swap]) swap = right;
                }
            }

            // Break if there are no swaps
            if (!swap) break;

            // Update our parent index
            this.value[index] = this.value[swap];

            // Update our child index
            this.value[swap] = lastNode;

            // Update our swap
            index = swap;
        }
        return firstNode;
    }

    // BUBBLING UP IMPLEMENTATION AS A FUNCTION
    bubbleUp() {
        let index = this.length - 1;
        const element = this.value[index];
        while (index > 0) {
            // Getting the parent index
            let parentIndex = Math.floor((index - 1) / 2);

            // Getting the parent element
            let parent = this.value[parentIndex];

            // Check if we already have a valid heap
            if (element <= parent) break;

            // Swap the values
            this.value[parentIndex] = element;
            this.value[index] = parent;

            // Update index
            index = parentIndex;
        }
    }
}

// SAMPLE RUN
const heap = new MaxHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.value);
heap.remove();
console.log(heap.value);
