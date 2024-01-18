// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

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
        if (!this.isEmpty()) {
            return this.items[this.top];
        }
    }
}

inp.on("close", () => {
    let brackets = userInput[0];

    let stack = new Stack();

    let isBalanced = true;

    for (let bracket of brackets) {
        if (bracket == '{' || bracket == '(' || bracket == '[') {
            stack.push(bracket);
        } else if ((bracket == '}' && stack.peek() == '{') || (bracket == ')' && stack.peek() == '(') || (bracket == ']' && stack.peek() == '[')) {
            stack.pop();
        } else {
            isBalanced = false;
        }
    }

    if (!stack.isEmpty()) isBalanced = false;

    console.log(isBalanced ? 'yes' : 'no');
});