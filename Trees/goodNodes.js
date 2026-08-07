// Leetcode 1448. Count Good Nodes in Binary Tree
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.
// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good. Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.

// Example 2:
// Input: root = [3,3,null,4,2]
// Output: 3
// Explanation: Node 2 -> (3,3,2) is not good, because "3" is higher than it.

// Tree structure for the above examples:
// Example 1:
//         3
//        / \
//       1   4
//      /   / \
//     3   1   5
// Example 2:
//         3
//        / \
//       3   null
//      / \
//     4   2


// Tree representation in JS 
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const goodNodes = (root) => {
    let ans = 0;
    function traversal(curr, maxSeenSoFar) {
        if (curr.val >= maxSeenSoFar) {
            ans++;
        }
        let currMax = Math.max(maxSeenSoFar, curr.val);
        curr.left && traversal(curr.left, currMax);
        curr.right && traversal(curr.right, currMax);
    }
    traversal(root, -Infinity);
    return ans;
}


// Test cases for all examples
const root1 = new TreeNode(3, new TreeNode(1, new TreeNode(3)), new TreeNode(4, new TreeNode(1), new TreeNode(5)));
const root2 = new TreeNode(3, new TreeNode(3, new TreeNode(4), new TreeNode(2)), null);

console.log(goodNodes(root1)); // Output: 4
console.log(goodNodes(root2)); // Output: 3