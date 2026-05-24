// HackerRank - Grid Challenge
// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
// Example
// grid = ['abc', 'ade', 'efg']
// The rows are already in alphabetical order. The columns are also in alphabetical order, so the answer is YES.
// Function Description
// Complete the gridChallenge function in the editor below. It should return a string, either YES or NO.
// gridChallenge has the following parameter(s):
// grid: an array of strings that represent the rows of the grid
// Constraints
// 1 <= n <= 100
// Each string consists of lowercase letters in the range ascii[a-z].

const gridChallenge = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("").sort().join("");
  }

  let rows = grid.length;
  let cols = grid[0].length;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows - 1; row++) {
      if (grid[row][col] > grid[row + 1][col]) {
        return "NO";
      }
    }
  }
  return "YES";
};

// Test cases
console.log(
  gridChallenge(["abc", "ade", "efg"])); // Output: "YES"
console.log(
  gridChallenge(["mpxz", "abcd", "wlmf"])); // Output: "NO"
console.log(
  gridChallenge(["abc", "hjk", "mpq", "rtv"])); // Output: "YES"    