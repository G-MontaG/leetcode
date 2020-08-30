class Stack {
  constructor(elements) {
    this._stack = [];
    if (elements && Array.isArray(elements) && elements.length > 0) {
      this._stack = [...elements];
    }
  }

  isEmpty() {
    return this._stack.length == 0;
  }

  push(element) {
    this._stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this._stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this._stack[this._stack.length - 1];
  }
}

const example = new Stack([2, 3]);
console.log(example);

console.log("isStackEmpty: ", example.isEmpty()); // false

console.log("Push 4");
example.push(4);
console.log("Push 1");
example.push(1);

console.log("Current peek is: ", example.peek()); // 1

console.log("Pop: ", example.pop()); // 1
console.log("Pop: ", example.pop()); // 4
console.log("Pop: ", example.pop()); // 3
console.log("Pop: ", example.pop()); // 2

console.log("isStackEmpty: ", example.isEmpty()); // true

console.log("Pop: ", example.pop()); // Underflow
