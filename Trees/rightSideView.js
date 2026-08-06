// Leetcode 199. Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.
// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:
// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:
// Input: root = []
// Output: []

// Tree structure for the above examples:
// Example 1:
//         1
//        / \
//       2   3
//        \   \
//         5   4
// Example 2:
//         1
//          \
//           3
// Example 3:
//        (empty tree)


// Tree representation in JS 
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function rightSideView(root) {
    if (!root) return [];

    let ans = [];
    let queue = [root];

    while (queue.length) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();

            i == 0 && ans.push(curr.val);

            curr.right && queue.push(curr.right);
            curr.left && queue.push(curr.left);
        }
    }
    return ans;
}

// Test cases for all examples
const root1 = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)));
const root2 = new TreeNode(1, null, new TreeNode(3));
const root3 = null;

console.log(rightSideView(root1)); // Output: [1, 3, 4]
console.log(rightSideView(root2)); // Output: [1, 3]
console.log(rightSideView(root3)); // Output: []