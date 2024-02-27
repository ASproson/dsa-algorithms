// You are given a doubly linked list and a position (0-based index). Write a function to insert a new node with a given value at the specified position in the list. If the position is invalid (negative or greater than the length of the list), the function should not modify the list

function insertNodeAtPosition(head, position, value) {}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);

head.next = second;
second.prev = head;
second.next = third;
third.prev = second;

function printLinkedList(head) {
  let current = head;
  let values = [];
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }
  console.log(values.join(" <-> "));
}

console.log("\nOriginal Doubly Linked List:");
printLinkedList(head); // 1 <-> 2 <-> 3

console.log("Doubly Linked List Insertion:");
printLinkedList(insertNodeAtPosition(head, 1, 4)); // 1 <-> 4 <-> 2 <-> 3
