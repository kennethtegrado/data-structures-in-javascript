function BFS(tree) {
    const queue = [],
        visited = [];

    // Push our root to our queue
    queue.push(tree.root);

    // Let loop run as long as our queue has elemetns
    while (queue.length) {
        // Dequeue
        const node = queue.shift();

        // Check if the node is already visited
        if (!visited.includes(node.value)) {
            // Add our left children if it exists to our queue
            if (node.left) queue.push(node.left);

            // Add our right children if it exists to our queue
            if (node.right) queue.push(node.right);

            // Push the value of our node to our visited nodes
            visited.push(node.value);
        }
    }

    // Return visited
    return visited;
}
