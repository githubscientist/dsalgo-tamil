class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    isEmpty() {
        if (this.top == -1) {
            return true;
        } else {
            return false;
        }
    }

    peek() {
        // if stack is not empty
        if (!this.isEmpty()) {
            return this.items[this.top];
        } else {
            // stack is empty
            return 'stack is empty!';
        }
    }
}

let stack = new Stack();

stack.push(3);
stack.push(7);
stack.push(1);
stack.push(5);
stack.push(4);
stack.pop();stack.pop();stack.pop();stack.pop();stack.pop();

console.log(stack.peek());