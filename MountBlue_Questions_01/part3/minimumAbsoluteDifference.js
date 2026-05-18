// Hackerrank - Minimum Absolute Difference in an Array
// Given an array of integers, find the minimum absolute difference between any two elements in the array.
// The absolute difference between two integers, a and b, is the absolute value of a - b.
// Example
// arr = [3, -7, 0]
// The minimum absolute difference is 3. 
// The pairs of integers with the minimum absolute difference are (3, 0) and (0, -7).

const minimumAbsoluteDifference = (arr) => {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;

    for(let i = 1; i < arr.length; i++){
        let diff = arr[i] - arr[i - 1];

        if(diff < minDiff){
            minDiff = diff;
        }
    }
    return minDiff;
}

// Test cases
console.log(minimumAbsoluteDifference([3, -7, 0])); // Output: 3
console.log(minimumAbsoluteDifference([1, 4, 7, 10])); // Output: 3
console.log(minimumAbsoluteDifference([-5, -2, 1, 4])); // Output: 3
console.log(minimumAbsoluteDifference([1, 3, 5, 7])); // Output: 2
console.log(minimumAbsoluteDifference([1, 1, 1, 1])); // Output: 0