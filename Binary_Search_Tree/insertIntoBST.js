// Leetcode: 701. Insert into a Binary Search Tree
// Given the root node of a binary search tree (BST) and a value to be inserted into the tree,
// insert the value into the BST. Return the root node of the BST after the insertion.
// It is guaranteed that the new value does not exist in the original BST.
// Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion.
// You can return any of them.
// Example 1:
// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]
// Example 2:
// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]
// Example 3:
// Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
// Output: [4,2,7,1,3,5]

// Tree representation in JavaScript:
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};

// Test cases for all examples
const root1 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
const val1 = 5;
console.log(insertIntoBST(root1, val1)); // Output: [4,2,7,1,3,5]
const root2 = new TreeNode(40, new TreeNode(20, new TreeNode(10), new TreeNode(30)), new TreeNode(60, new TreeNode(50), new TreeNode(70)));
const val2 = 25;
console.log(insertIntoBST(root2, val2)); // Output: [40,20,60,10,30,50,70,null,null,25]
const root3 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
const val3 = 5;
console.log(insertIntoBST(root3, val3)); // Output: [4,2,7,1,3,5]
