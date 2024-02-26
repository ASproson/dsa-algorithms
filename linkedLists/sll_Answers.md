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

Time complexity: O(n) as traverse the entire array

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

Time complexity: O(n) as traverse the entire array

Space complexity: O(1) as we only store references to the passed array

First, we initialize `fast` and `slow` to the passed head of the linked list. Then `while fast && fast.next` we iterate, incrementing the `slow` node by 1 each time, but the `fast` node by 2 each time. This allows the two variables to traverse the linked list at two different speeds, this means that when `fast.next` is null, we know we have reached the end of the list and as such terminate the loop

Lastly, we return `slow` as that is pointing to the middle node of the passed list