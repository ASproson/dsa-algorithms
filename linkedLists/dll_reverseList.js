// Given a doubly linked list, write a function to reverse the list in place
// Your function should take the head of the doubly linked list as input and return the new head of the reversed list
// Input: 1 <-> 2 <-> 3 <-> 4 <-> 5
// Output: 5 <-> 4 <-> 3 <-> 2 <-> 1

function reverseDoublyLinkedList(head) {
  let current = head;
  let temp = null;

  // Swap next and prev pointers for all nodes of the doubly linked list
  while (current !== null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev; // Move to the next node
  }

  // Before changing the head, check for empty list or list with only one node
  if (temp !== null) {
    head = temp.prev;
  }

  return head;
}

// Do not edit code below

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
let fourth = new Node(4);
let fifth = new Node(5);

head.next = second;
second.prev = head;
second.next = third;
third.prev = second;
third.next = fourth;
fourth.prev = third;
fourth.next = fifth;
fifth.prev = fourth;

function printLinkedList(head) {
  let current = head;
  let values = [];
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }
  console.log(values.join(" <-> "));
}

console.log("\nOriginal Doubly Linked List:"); // 1 <-> 2 <-> 3 <-> 4 <-> 5
printLinkedList(head);

console.log("\nReversed Doubly Linked List:");
printLinkedList(reverseDoublyLinkedList(head)); // 5 <-> 4 <-> 3 <-> 2 <-> 1
