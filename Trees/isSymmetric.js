// Leetcode 101. Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Tree structure for the above examples:
// Example 1:
//         1
//        / \
//       2   2
//      / \ / \
//     3  4 4  3

// Example 2:
//         1
//        / \
//       2   2
//        \   \
//         3   3

// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}


// Function to check if a binary tree is symmetric in recursive approach
var isSymmetric = function (root) {
  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }
  return isMirror(root.left, root.right);
};

// Iterative approach using a queue
var isSymmetricIterative = function (root) { 
  let queue = [root.left, root.right];

  while (queue.length) {
    let p1 = queue.shift();
    let p2 = queue.shift();

    if (p1 == null && p2 == null) continue;

    if ((p1 == null || p2 == null) || p1.val !== p2.val) return false;

    queue.push(p1.left, p2.right);
    queue.push(p1.right, p2.left);
  }
  return true;
}

// Test cases
const root1 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(3), new TreeNode(4)), 
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

const root2 = new TreeNode(1, 
    new TreeNode(2, null, new TreeNode(3)), 
    new TreeNode(2, null, new TreeNode(3))
);

console.log(isSymmetric(root1)); // Output: true
console.log(isSymmetric(root2)); // Output: false
console.log(isSymmetricIterative(root1)); // Output: true
console.log(isSymmetricIterative(root2)); // Output: false
