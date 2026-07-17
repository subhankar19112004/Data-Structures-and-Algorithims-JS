// Leetcode 102. Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:
// Input: root = [1, 2, 3, 4, 5, null, 6]
// Output: [[1],[2,3],[4,5,6]]
// Tree structure: for example 2
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// level order traversal of a binary tree - Iterative approach
const levelorderTraversal = (root) => {
    if(!root) return [];

    let queue = [root];
    let ans = [];

    while (queue.length) {
        let levelArr = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
            levelArr.push(curr.val);
        }
        ans.push(levelArr);
    }
    return ans;
}

// Test cases for example 2
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(6)));
console.log(levelorderTraversal(root)); // Output: [[1],[2,3],[4,5,6]]