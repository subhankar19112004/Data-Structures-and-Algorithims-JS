// LeetCode 236. Lowest Common Ancestor of a Binary Tree
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia:
// “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5

// Tree structure for the above examples:
// Example 1:
//         3
//        / \
//       5   1
//      / \ / \
//     6  2 0  8
//       / \
//      7   4
// Example 2:
//         3
//        / \
//       5   1
//      / \ / \
//     6  2 0  8
//       / \
//      7   4


function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  function traversal(curr) {
    let count = 0;
    if (!curr) return 0;

    let left = traversal(curr.left);
    let right = traversal(curr.right);

    if (curr.val == p.val || curr.val == q.val) ++count;

    count = left + right + count;
    if (count == 2 && !lca) {
      lca = curr;
    }
    return count;
  }
  traversal(root);
  return lca;
};

// Test cases for all examples
const root1 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(0), new TreeNode(8)));
const p1 = root1.left;
const q1 = root1.right;
const root2 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(0), new TreeNode(8)));
const p2 = root2.left;
const q2 = root2.left.right.right;

console.log(lowestCommonAncestor(root1, p1, q1).val); // Output: 3
console.log(lowestCommonAncestor(root2, p2, q2).val); // Output: 5
