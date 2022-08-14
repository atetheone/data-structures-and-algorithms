const countNodes = (tree) => {
    if (!tree) return 0;
    return 1 + countNodes(tree.left) + countNodes(tree.right);
};

module.exports = countNodes;


