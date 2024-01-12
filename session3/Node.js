// 5 1 3 2 4
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = Node;

// let node1 = new Node(5);
// let node2 = new Node(1);

// node1.next = node2;

// console.log(node1.data, node1.next.data);
// console.log(node2);

// /*
//     node1 = Node { 
//         data: 5, 
//         next: Node { 
//             data: 1, 
//             next: null 
//         } 
//     }

//     node2 = Node {
//         data: 1,
//         next: null
//     }
// */