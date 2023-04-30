// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
//   get size() {
//     let count = 0;
//     let node = this.head;
//     while (node) {
//       count++;
//       node = node.next;
//     }
//     return count;
//   }

//   get clear() {
//     this.head = null;
//   }

//   get getLast() {
//     let node = this.head;
//     while (node.next) {
//       node = node.next;
//     }
//     return node;
//   }

//   get getFirst() {
//     return this.head;
//   }

//   insertAt(pos, value) {
//     return this.head;
//   }
// }

// let node1 = new Node(1);
// let node2 = new Node(2);
// node2.next = new Node(3);
// node1.next = node2;

// console.log("node1", node1);
// console.log("node2", node2);

// let list = new LinkedList(node1);
// console.log("list", list, list.size);
// console.log("last", list.getLast);
// console.log("first", list.insertAt());
// console.log("clear", list.clear);

// console.log("list", list, list.size);

