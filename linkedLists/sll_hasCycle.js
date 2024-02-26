// You are given a singly linked list that may or may not have a cycle. Write a function hasCycle(head) that returns true if the linked list has a cycle, or false otherwise

function hasCycle(head) {}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = head.next; // Creating a cycle

console.log(hasCycle(head)); // true
