class Stack {
  _stack = [];

  constructor(elements) {
    if (elements && Array.isArray(elements) && elements.length > 0) {
      this._stack = [...elements];
    }
  }

  isStackEmpty() {
    if (this._stack.length == 0) {
      return true;
    }
    return false;
  }

  push(element) {
    this._stack.push(element);
  }

  pop() {
    return this._stack.pop();
  }
}

const example = new Stack([2, 3]);
console.log("Stack [2, 3]");

console.log("isStackEmpty: ", example.isStackEmpty()); // false

console.log("Push 4");
example.push(4);
console.log("Push 1");
example.push(1);

console.log("Pop: ", example.pop()); // 1
console.log("Pop: ", example.pop()); // 4
console.log("Pop: ", example.pop()); // 3
console.log("Pop: ", example.pop()); // 2

console.log("isStackEmpty: ", example.isStackEmpty()); // true