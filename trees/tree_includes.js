const tree_includes = (root, target) => {
    if (root.val === target) return true;
    
    let queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === target) return true;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return false;
};

module.exports = tree_includes;