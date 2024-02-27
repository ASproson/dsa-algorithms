// Given the root of a binary tree and an integer targetSum, return true if there exists a path from the root to a leaf such that the sum of the nodes on the path is equal to targetSum, and return false otherwise

function pathSum(root, targetSum) {
  const dfs = (node, curr) => {
    if (!node) {
      return false;
    }

    // if both children are null, then the node is a leaf
    if (!node.left && !node.right) {
      return curr + node.val == targetSum;
    }

    curr += node.val;
    let left = dfs(node.left, curr);
    let right = dfs(node.right, curr);
    return left || right;
  };

  return dfs(root, 0);
}

// Define the binary tree
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Create the binary tree
let root = new TreeNode(5);

root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

// Test cases
console.log(pathSum(root, 22)); // true, root > left > left > right
console.log(pathSum(root, 27)); // true, root > left > left > left
console.log(pathSum(root, 50)); // false
