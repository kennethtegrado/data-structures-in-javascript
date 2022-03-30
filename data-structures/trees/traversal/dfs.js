function preOrder(tree) {
    const visited = [];
    const node = tree.root;

    const traverse = function (node) {
        visited.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    };

    traverse(node);
    return visited;
}

function postOrder(tree) {
    const visited = [];
    const node = tree.root;

    const traverse = function (node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.value);
    };

    traverse(node);
    return visited;
}
