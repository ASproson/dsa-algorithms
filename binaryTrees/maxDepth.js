function maxDepth(root) {}

// Example binary tree node structure
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Example binary tree
let root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.right.right = new TreeNode(6);

// Perform DFS traversal
console.log(maxDepth(root)); // 4
