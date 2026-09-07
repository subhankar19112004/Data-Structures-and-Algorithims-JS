// Leetcode 378. Kth Smallest Element in a Sorted Matrix
// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
// You must find a solution with a memory complexity better than O(n2).
// Example 1:
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:
// Input: matrix = [[-5]], k = 1
// Output: -5



const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
var kthSmallest = function (matrix, k) {
  let heap = new MinPriorityQueue((x) => x.val);
  let n = matrix[0].length;

  for (let i = 0; i < n; i++) {
    heap.enqueue({ val: matrix[i][0], row: i, col: 0 });
    }
    
    for (let count = 0; count < k - 1; count++) {
        let { val, row, col } = heap.dequeue()

        if (col + 1 < n) {
            heap.enqueue({val: matrix[row][col + 1], row: row, col: col + 1});
        }
    }
    return heap.dequeue().val;
};

// Time Complexity: O(k log n) where n is the number of rows in the matrix. We perform k iterations, and each iteration involves inserting and removing elements from the heap, which takes O(log n) time.
// Space Complexity: O(n) where n is the number of rows in the matrix. The heap can contain at most n elements at any given time, as we only store one element from each row in the heap.

// Test cases
console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8));
console.log(kthSmallest([[-5]], 1));
console.log(kthSmallest([[1, 3, 5], [7, 10, 13], [9, 14, 17]], 6));
