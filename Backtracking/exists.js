// Leetcode 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.
// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false


// Always remember these Pointers : 
// for a cordinate (x, y) in the grid, the adjacent cells are:
// Top: (x - 1, y)
// Bottom: (x + 1, y)
// Left: (x, y - 1)
// Right: (x, y + 1)

// Grid Structure : 
// A B C E
// S F C S
// A D E E

var exists = function (board, word) {
    let result = false;
    let m = board.length;
    let n = board[0].length;

    function backtrack(x, y, newIndex) {
        if (newIndex === word.length) {
            result = true;
            return;
        }

        let temp = board[x][y];
        board[x][y] = '#'; // Mark the cell as visited

        // Top
        if (x > 0 && board[x - 1][y] === word[newIndex]) {
            backtrack(x - 1, y, newIndex + 1);
        }

        // Bottom
        if(x < m - 1 && board[x + 1][y] === word[newIndex]) {
            backtrack(x + 1, y, newIndex + 1);
        }

        // Left
        if(y > 0 && board[x][y - 1] === word[newIndex]) {
            backtrack(x, y - 1, newIndex + 1);
        }

        // Right
        if( y < n - 1 && board[x][y + 1] === word[newIndex]) {
            backtrack(x, y + 1, newIndex + 1);
        }
        board[x][y] = temp; // Restore the cell from hash to original number
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                backtrack(i, j, 1);
            }
        }
    }
    return result;
}

// Time Complexity: O(m * n * 4^L) -> it can be writen as O(L * 3^n) : where L is Length of the grid, where m is the number of rows, n is the number of columns, and L is the length of the word.
//  - In the worst case, we may have to explore all cells in the grid for each character in the word, and for each cell, we have 4 possible directions to explore.
// Space Complexity: O(L) where L is the length of the word, which is the maximum depth of the recursion stack.

// Test cases
console.log(exists([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));
console.log(exists([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"));
console.log(exists([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"));