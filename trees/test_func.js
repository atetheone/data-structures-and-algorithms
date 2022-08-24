const Node = require('./tree_node');
const countNodes = require('./countNodes');
const dft = require('./dft');
const bft = require('./bft');
const tree_includes = require('./tree_includes');

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.right = b;
a.left = f;


d.right = e;

c.left = a;
c.right = d;

/**
 *         c
 *     a        d
 *  f    b        e
 */

// console.log('nb(nodes): ' + countNodes(c))
// console.log('dft(c): ');
// dft(c);
console.log('\ndft(c): ');
dft(c);
// console.log('node_in_tree : ' + tree_includes(c, 'b'));
