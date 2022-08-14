const bft = root => {
    if (!root) return;

    let queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log('node: ' + current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

};

module.exports = bft;