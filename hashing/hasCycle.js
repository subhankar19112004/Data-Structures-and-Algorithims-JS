// LeetCode 141. Linked List Cycle (Using Hashing)
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true

// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// We will use a Set to keep track of the nodes we have seen. If we encounter a node that is already in the Set, then there is a cycle in the linked list. If we reach the end of the list (i.e., a node with no next pointer), then there is no cycle.


// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const hasCycle = (head) => {
  if (!head) return false;
  let set = new Set();
  let curr = head;
  while (curr.next) {
    if (set.has(curr)) {
      return true;
    } else {
      set.add(curr);
      curr = curr.next;
    }
  }
  return false;
};

// Time Complexity: O(n) - We traverse the linked list once, where n is the number of nodes in the linked list.
// Space Complexity: O(n) - We use a Set to store the nodes we have seen, which can take up to n space in the worst case.

// Test Cases
const testCases = [
  {
    input: [3, 2, 0, -4],
    pos: 1,
    expected: true
  },
  {
    input: [1, 2],
    pos: 0,
    expected: true
  },
  {
    input: [1],
    pos: -1,
    expected: false
  }
];


