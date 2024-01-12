const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // insert data at tail
    // method name: insertAtTail
    push(data) {
        let newNode = new Node(data);
        // check if the list is empty
        if (this.head == null) {
            // list is empty
            this.head = this.tail = newNode;
        } else if(this.head.next == null) {
            // list is not empty
            // list has only one element
            this.head.next = newNode;
            this.tail = this.tail.next;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    toArray() {
        let nodes = [];

        // traverse
        while (this.head != null) {
            nodes.push(this.head.data);
            this.head = this.head.next;
        }

        return nodes;
    }

    unshift(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
}

module.exports = LinkedList;