// Leetcode 103. Binary Tree Zigzag Level Order Traversal
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:
// Input: root = [1]
// Output: [[1]]
// Example 3:
// Input: root = []
// Output: []

// Tree repesentation in JS
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const zigzagLevelOrder = (root) => {
  if (!root) return [];

  let ans = [];
  let queue = [root];
  let level = 0;

  while (queue.length) {
    let levelArr = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();

      if (level % 2 === 0) {
        levelArr.push(curr.val);
      } else {
        levelArr.unshift(curr.val);
      }

      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
    ans.push(levelArr);
    level++;
  }
  return ans;
};

// Test cases for all examples
const root1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
const root2 = new TreeNode(1);
const root3 = null;

console.log(zigzagLevelOrder(root1)); // Output: [[3],[20,9],[15,7]]
console.log(zigzagLevelOrder(root2)); // Output: [[1]]
console.log(zigzagLevelOrder(root3)); // Output: []