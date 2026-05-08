// HackerRank - Divisible Sum Pairs
// Given an array of integers and a positive integer k, 
// determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.
// Example
// n = 6
// k = 3
// ar = [1, 3, 2, 6, 1, 2]
// Three pairs meet the criteria: [1, 2], [1, 5], and [2, 4] (using 0-based indexing). 
// Note that (i, j) and (j, i) are considered to be the same pair.
const divisibleSumPairs = (n, k, arr) => {
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let sum = arr[i] + arr[j];
            let diff = sum % k;
            if(diff === 0)count++;
        }
    }
    return count;
}

// Test cases
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // Output: 5
console.log(divisibleSumPairs(5, 2, [1, 2, 3, 4, 5])); // Output: 4
console.log(divisibleSumPairs(4, 2, [1, 3, 5, 7])); // Output: 6
console.log(divisibleSumPairs(5, 1, [1, 2, 3, 4, 5])); // Output: 10
console.log(divisibleSumPairs(5, 5, [1, 2, 3, 4, 5])); // Output: 4