// Hackerrank Problem: Cut the Sticks
// You are given a number of sticks of varying lengths.
// You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left.
// At each iteration you will determine the length of the shortest stick remaining,
// cut that length from each of the longer sticks and then discard all the pieces of that shortest length.
// When all the remaining sticks are the same length, they cannot be shortened so discard them.
// Given the lengths of the sticks, print the number of sticks that are left before each iteration until there are none left.
// Example
// arr = [5, 1, 2, 3, 4]
// The shortest stick is of length 1, so we cut that length from the longer sticks and discard the pieces of length 1.
// The remaining lengths are [4, 1, 2, 3]. The shortest stick is now of length 1, so we cut that length from the longer sticks and discard the pieces of length 1.
// The remaining lengths are [3, 1, 2]. The shortest stick is now of length 1, so we cut that length from the longer sticks and discard the pieces of length 1.
// The remaining lengths are [2, 1]. The shortest stick is now of length 1, so we cut that length from the longer sticks and discard the pieces of length 1.
// The remaining lengths are [1]. The shortest stick is now of length 1, so we cut that length from the longer sticks and discard the pieces of length 1.
// There are no more sticks left, so we print the number of sticks at each iteration: 5, 4, 3, 2, 1.

const cutTheStickers = (arr) => {
  arr.sort((a, b) => a - b);
  let result = [];
  let i = 0;

  while (i < arr.length) {
    let leftOver = arr.length - i;
    result.push(leftOver);

    let currSmallest = arr[i];
    while (i < arr.length && currSmallest == arr[i]) {
      ++i;
    }
  }
  return result;
};

// Time Complexity: O(n log n) due to sorting the array
// Space Complexity: O(n) for storing the result array

// Example usage:
const arr = [5, 1, 2, 3, 4];
const result = cutTheStickers(arr);
console.log(result); // Output: [5, 4, 3, 2, 1]
