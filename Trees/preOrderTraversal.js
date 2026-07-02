// LeetCode : 144. Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Tree structure:
//     1
//   /   \
// null   2
//      /
//     3

// Process : Root -> Left -> Right


//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    ans.push(curr.val);

    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);

  return ans;
};

// Test case
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(preorderTraversal(root)); // Output: [1, 2, 3]
