function preOrder(tree) {
    const visited = [];

    // Helper recursive function for traversing our tree
    const traverse = function (node) {
        if (!node) return;
        // Push our node to the visited nodes
        visited.push(node.value);

        // Recursive call
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    };

    // Call traverse
    traverse(tree.root);
    return visited;
}

function postOrder(tree) {
    const visited = [];

    const traverse = function (node) {
        if (!node) return;
        // Recursive Call
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);

        // Push our node to the visited array
        visited.push(node.value);
    };

    // Function call
    traverse(tree.root);
    return visited;
}

function inOrder(tree) {
    const visited = [];

    const traverse = function (node) {
        if (!node) return;
        // Recursive Call
        if (node.left) traverse(node.left);

        // Push our node to the visited array
        visited.push(node.value);

        // Recursive call
        if (node.right) traverse(node.right);
    };

    // Function call
    traverse(tree.root);
    return visited;
}

// function stackPreOrder(tree) {
//     const stack = [],
//         visited = [];
//     let node = tree.root;
//     stack.push(node);
//     while (stack.length) {
//         node = tree
//     }
// }
