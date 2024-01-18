class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        let newNode = new Node(data);

        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.isEmpty()) {
            this.top = this.top.next;
        }
    }

    isEmpty() {
        return this.top == null;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.top.data;
        }
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(2);
stack.push(6);
stack.pop();stack.pop();stack.pop();

console.log(stack.peek());