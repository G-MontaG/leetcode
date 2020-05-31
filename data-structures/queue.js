class Queue {
  _queue = [];

  constructor(elements) {
    if (elements && Array.isArray(elements) && elements.length > 0) {
      this._queue = [...elements];
    }
  }

  isQueueEmpty() {
    if (this._queue.length == 0) {
      return true;
    }
    return false;
  }

  enqueue(element) {
    this._queue.push(element);
  }

  dequeue() {
    if (this.isQueueEmpty()) {
      return "Underflow";
    }
    return this._queue.shift();
  }

  front() {
    if (this.isQueueEmpty()) {
      return "Underflow";
    }
    return this._queue[0];
  }
}

const example = new Queue([2, 3]);
console.log(example);

console.log("isQueueEmpty: ", example.isQueueEmpty()); // false

console.log("Enqueue 4");
example.enqueue(4);
console.log("Enqueue 1");
example.enqueue(1);

console.log("Current front is: ", example.front()); // 2

console.log("Dequeue: ", example.dequeue()); // 2
console.log("Dequeue: ", example.dequeue()); // 3
console.log("Dequeue: ", example.dequeue()); // 4
console.log("Dequeue: ", example.dequeue()); // 1

console.log("isQueueEmpty: ", example.isQueueEmpty()); // true

console.log("Dequeue: ", example.dequeue()); // Underflow
