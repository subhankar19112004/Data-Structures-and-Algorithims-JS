// HackerRank - Diagonal Difference
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonalDifference = (arr) => {

    let primarySum = 0;
    let secondarySum = 0;
    let n = arr.length ;

    for(let i = 0; i < arr.length; i++){
        primarySum = primarySum + arr[i][i];
        secondarySum = secondarySum + arr[i][n - 1 - i];
    }
    return Math.abs(primarySum - secondarySum);
}

// Test cases
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); // Output: 15
console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]])); // Output: 2