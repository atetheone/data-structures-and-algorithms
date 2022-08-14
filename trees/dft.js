const dft = (tree) => {
    if (!tree) return;

    console.log('node ' + tree.val);

    dft(tree.left);
    dft(tree.right);
};

module.exports = dft;