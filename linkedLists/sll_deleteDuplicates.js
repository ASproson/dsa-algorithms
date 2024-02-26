// Given an ordered linked list, remove any duplicates

function deleteDuplicates(head) {}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to print the linked list
function printList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

// Test case 1: No duplicates
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
console.log("Original List (no duplicates):");
printList(head1);
console.log("After removing duplicates:");
printList(deleteDuplicates(head1));

// Test case 2: Duplicates exist
const head2 = new ListNode(1);
head2.next = new ListNode(1);
head2.next.next = new ListNode(2);
head2.next.next.next = new ListNode(3);
console.log("Original List (has duplicates):");
printList(head2);
console.log("After removing duplicates:");
printList(deleteDuplicates(head2));
