const LinkedList = require('./LinkedList');
const Node = require('./Node');

// create a new Linked List
let list = new LinkedList();

list.push(5);
list.push(1);
list.push(3);
list.push(2);
list.push(4);

list.unshift(6);
list.unshift(7);

console.log(list.toArray());