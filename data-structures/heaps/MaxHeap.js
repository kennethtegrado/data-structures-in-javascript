class MaxHeap {
    constructor() {
        this.value = [];
        this.length = 0;
    }

    insert(val) {
        // Push our value to our heap
        this.value.push(val);

        // Increment
        this.length++;

        // Set index of val
        let index = this.length - 1;

        // Bubbling up
        while (index) {
            // Get the parent index of our node
            const parentIndex = Math.floor((index - 1) / 2);

            // Get the parent element
            const parent = this.value[parentIndex];

            // Get the current element
            const element = this.value[index];

            // Guard Clause
            if (element <= parent) break;

            // Swapping
            this.value[index] = parent;
            this.value[parentIndex] = element;
        }

        return this.value;
    }

    // BUBBLING UP IMPLEMENTATION
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
heap.insert(5);
heap.insert(10);
heap.insert(2);
heap.insert(9);
heap.insert(1);
console.log(heap.value);
