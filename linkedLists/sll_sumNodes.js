// Given a linked list, return the sum of all the nodes

function sumNodes(head) {}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(10);

console.log(sumNodes(head)); // 16
