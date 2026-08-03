// Leetcode 572. Subtree of Another Tree
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const isSubtree = (root, subRoot) => {
  let hashRoot = serialization(root);
  let hashSubRoot = serialization(subRoot);
  return hashRoot.includes(hashSubRoot);
};

// Serializes a binary tree into a string representation
function serialization(root) {
  let hashed = "";
  function traversal(curr) {
    if (!curr) {
      hashed = hashed + "-#";
      return;
    }
    hashed = hashed + "-" + curr.val;
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return hashed;
}

// Test cases
const root1 = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
const subRoot1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(root1, subRoot1)); // Output: true
