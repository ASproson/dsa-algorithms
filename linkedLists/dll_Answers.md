## reverseDoublyLinkedList

_Given a doubly linked list, write a function to reverse the list in place. Your function should take the head of the doubly linked list as input and return the new head of the reversed list_

```JavaScript
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
```

Time complexity: O(n) as we must traverse the entire list to re-order it

Space complexity: O(1) as we modify the passed list in memory

First we create `current`, which is a memory reference to the passed list. Next, we initialize `temp` to null

Then, we loop over until `current` doesn't equal null; when `current` is null that means we've reached the end of the list and there are no more nodes to operate on

Inside the loop we initial `temp = current.prev`, which allows us to capture the previous node in relation to the currently iterated value (if it exists, else null)

Then we assign `current.prev` to `current.next` and `current.next` to `current.prev`, allowing us to _swap_ the elements in place

To end the current iteration we set `current` to `current.prev`, which allows us to move to the next node in the list

Lastly, we check for an empty list or a list with only one node then we return the head
