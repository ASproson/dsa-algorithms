function sumOfTree(root) {}

// Define a simple binary tree node structure
function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Create a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Test the sumOfTree function with console logs
const sum = sumOfTree(root);
console.log("Sum of all node values:", sum); // 28
