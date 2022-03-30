function BFS(tree) {
    const queue = [],
        visited = [];
    queue.push(tree.root);
    while (queue.length) {
        const node = queue.shift();
        if (!visited.includes(node.value)) {
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            visited.push(node.value);
        }
    }

    return visited;
}
