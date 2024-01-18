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
        // if stack is not empty
        if (!this.isEmpty()) {
            return this.items[this.top];
        } else {
            // stack is empty
            return 'stack is empty!';
        }
    }
}

inp.on("close", () => {
    let words = userInput[0].split(' ');
    
    // create an empty stack
    let stack = new Stack();

    // traverse the words array
    for (let word of words) {
        // check if the stack is empty
        if (stack.isEmpty()) {
            // stack is empty
            // push the word
            stack.push(word);
        } else {
            // stack is not empty
            // check if the current word and the word at top of the stack are equal
            if (word == stack.peek()) {
                // pop the stack
                stack.pop();
            } else {
                // push the word to the stack
                stack.push(word);
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});