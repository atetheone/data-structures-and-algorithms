
function Queue(array) {
    this.queue = !array ? [] : array;
}

Queue.prototype.dequeue = function () {    
    if (this.isEmpty()) throw 'Empty queue'
    return this.queue.shift()
}

Queue.prototype.peek = function () {
    if (this.isEmpty()) throw 'Empty queue'
    return this.queue[0]
}

Queue.prototype.enqueue = function(val) {
    this.queue.push(val)
}

Queue.prototype.isEmpty = function() {
    return this.queue.length === 0
}

Queue.prototype.getBuffer = function() {
    return this.queue.slice()
}

Stack.prototype.stackAccessNthTopNode = function(n) {
    if (n <= 0) throw 'error'
    let copy = this.getBuffer(), queueCopy = new Stack(copy)

    while (--n) queueCopy.dequeue()
    return queueCopy.dequeue()
}

Stack.prototype.search = function(target) {
    let copy = this.getBuffer(), queueCopy = new Stack(copy)

    while (!queueCopy.isEmpty()) {
        if (queueCopy.dequeue() === target) return true
    }
    return false
}



const queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log(queue1); // {array: [1,2,3]}

queue1.dequeue();
console.log(queue1); // {array: [2,3]}