## sumNodes

_Given a linked list, return the sum of all nodes_

```JavaScript
function sumNodes(head) {
  let ans = 0;
  while (head) {
    ans += head.val;
    head = head.next;
  }
  return ans;
}

```

Time complexity: O(n) as we traverse the entire array

Space complexity: O(1) as we only store references to the passed array

We first initialize `ans` to 0, as we will be using that to total up each value within the currently iterated node in our `while` loop

For each interation we increment `ans` with `head.val`, and then we point `head` to its next node with `head = head.next`, this ensures we traverse the entire list

Lastly we return the `ans`, which is the sum of the `node.vals` within the list

## findMiddle

_You are given a linked list, return the middle node of the linked list_

```JavaScript
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
```

Time complexity: O(n) as we traverse the entire array

Space complexity: O(1) as we only store references to the passed array

First, we initialize `fast` and `slow` to the passed head of the linked list. Then `while fast && fast.next` we iterate, incrementing the `slow` node by 1 each time, but the `fast` node by 2 each time. This allows the two variables to traverse the linked list at two different speeds, this means that when `fast.next` is null, we know we have reached the end of the list and as such terminate the loop

Lastly, we return `slow` as that is pointing to the middle node of the passed list

## hasCycle

_You are given a singly linked list that may or may not have a cycle. Write a function hasCycle(head) that returns true if the linked list has a cycle, or false otherwise_

```JavaScript
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle detected
}
```

Time complexity: O(n) as we traverse the entire array

Space complexity: O(1) as we only store references to the passed array

We first initialize `fast` and `slow` to the currently passed linked list. Then, `while fast && fast.next` we iterate until `fast.next === null`. We update `slow` to the next node and update `fast` to the next, next node. This allows us to move `fast` foward by two nodes, whilst `slow` only moves one node at a time

If, at any point, `slow === fast` then we know that we have found a cycle because we `fast` has looped over the entire list and has begun to _lap_ over `slow`, so we return true

If `fast.next` ever becomes null, we know that we do not have a cycle and can return false

## deleteDuplicates

_Given an ordered linked list, remove any duplicates_

```JavaScript
function deleteDuplicates(head) {
  let current = head;
  while (current && current.next) {
    let nextNode = current.next;
    if (current.val === nextNode.val) {
      current.next = nextNode.next;
    } else {
      current = current.next;
    }
  }
  return head;
}
```

Time complexity: O(n) as we traverse the entire array

Space complexity: O(1) as we only store references to the passed array

First we assign `current` to head. `while current && current.next` we iterate through the list until `current.next` is null. We store the `nextNode` as the next value in the node

This allows us to compare the `current.val` to `nextNode.val`. If they match, then we know that there are duplicates so we reassign `current.next` to `nextNode.next`, allowing us to _skip_ over the next node in the list. This _orphans_ the node, removing it from the list

If we do not find a match, then we reassign `current` to be `current.next` to continue the loop

Lastly we return `head` as all of our operations that occurred on `current` were done via memory reference, meaning that all changes on `current` impact our provided `head`
