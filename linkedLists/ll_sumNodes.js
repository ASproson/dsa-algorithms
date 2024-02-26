// Given a linked list, return the sum of all the nodes

function sumNodes(head) {
  let ans = 0;
  while (head) {
    ans += head.val;
    head = head.next;
  }
  return ans;
}

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
