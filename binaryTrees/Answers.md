## sumOfTree

_Find the sum of all nodes in the binary tree_

```JavaScript
function sumOfTree(root) {
    // Base case: If the root is null, return 0
    if (!root) return 0;
    // Recursively calculate the sum of the left and right subtrees
    let leftSum = sumOfTree(root.left);
    let rightSum = sumOfTree(root.right);
    return root.value + leftSum + rightSum;
}
```

Time complexity: O(n) as we must traverse the entire array

Space complexity: O(n) as we place function calls on to the stack based on the length of the tree

If there is no `root` then we return 0, but given this is a recursive function let's investigate this deeper. If we traverse down the left side of the tree and there is no more `root.left` it will return `null` and satisfy the `if` condition. This will close the current recursive function and pop that function call off the stack

As each recursive function completes its computation for a particular node in the tree, it returns the sum of its own node's value along with the sums obtained from its left and right subtrees. This returned sum is then propagated back up the call stack to the parent node. At each level of the recursion, the parent node adds its own value to the sum received from its children. This process continues recursively until the initial call to sumOfTree has traversed and summed all nodes in the binary tree.

Ultimately, the final sum, representing the sum of all nodes in the tree, is returned by the initial call to sumOfTree.

## maxDepth

_Given the root of a binary tree, find the length of the longest path from the root to a leaf_

```JavaScript
function maxDepth(root) {
	if(!root) return 0;
	let left = maxDepth(root.left);
	let right = maxDepth(root.right)
	return Math.max(left, right) + 1
}
```

Once again, if there is no `root` available, we return 0 and pop that recursive function off the call stack

We then store the current depth of `left` and `right` subtrees, and returning the maximum value of those variables + 1. But why we do add one? This is because the question asks for the longest path from root to a leaf, and the root itself counts as a node.
