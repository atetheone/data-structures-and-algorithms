

function Stack(array) {
    this.stack = !array ? [] : array;
}

Stack.prototype.peek = function() {
    return this.stack[this.stack.length - 1]
}

Stack.prototype.pop = function() {
    return this.stack.pop()
}

Stack.prototype.push = function(val) {
    this.stack.push(val)
}

Stack.prototype.isEmpty = function() {
    return this.stack.length === 0
}

Stack.prototype.getBuffer = function() {
    return this.stack.slice()
}

Stack.prototype.stackAccessNthTopNode = function(n) {
    if (n <= 0) throw 'error'
    let copy = this.getBuffer(), stackCopy = new Stack(copy)

    while (--n) stackCopy.pop()
    return stackCopy.pop()
}

Stack.prototype.search = function(target) {
    let copy = this.getBuffer(), stackCopy = new Stack(copy)

    while (!stackCopy.isEmpty()) {
        if (stackCopy.pop() === target) return true
    }
    return false
}

const stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
stack.stackAccessNthTopNode(2);