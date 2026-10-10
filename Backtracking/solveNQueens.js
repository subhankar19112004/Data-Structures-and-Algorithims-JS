// Leetcode 51. N-Queens
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
// Example 1:
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:
// Input: n = 1
// Output: [["Q"]]

const solveNQueens = (n) => {
  let result = [];
  let board = Array.from({ length: n }, () => Array(n).fill("."));

  let backtrack = (board, row, colSet, digSet, antiDigSet) => {
    if (row === n) {
      result.push(transform(board));
      return;
    }

    for (let col = 0; col < board.length; col++) {
      if (
        colSet.has(col) ||
        digSet.has(row - col) ||
        antiDigSet.has(row + col)
      ) {
        continue;
      }

      board[row][col] = "Q";
      colSet.add(col);
      digSet.add(row - col);
      antiDigSet.add(row + col);

      backtrack(board, row + 1, colSet, digSet, antiDigSet);

      board[row][col] = ".";
      colSet.delete(col);
      digSet.delete(row - col);
      antiDigSet.delete(row + col);
    }
    };
    backtrack(board, 0, new Set(), new Set(), new Set());
  return result;
};

function transform(board) {
    let newArr = [];
    for (let i = 0; i < board.length; i++) {
        newArr.push(board[i].join(""));
    }
    return newArr;
}

// Time Complexity: O(N!) - The time complexity is O(N!) because we are trying to place N queens on an N x N chessboard, and for each queen, we have N choices for the column. However, as we place more queens, the number of valid choices decreases, leading to a factorial time complexity.
// Space Complexity: O(N) - The space complexity is O(N) because we are using sets to keep track of the columns, diagonals, and anti-diagonals that are already occupied by queens. In the worst case, we may need to store N elements in each set, leading to a space complexity of O(N). Additionally, the recursion stack can go up to N levels deep, but this does not change the overall space complexity since it is still linear with respect to N.

// Test Cases
console.log(solveNQueens(4));
console.log(solveNQueens(1));
