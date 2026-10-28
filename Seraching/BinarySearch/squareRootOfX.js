// Leetcode: 69. Sqrt(x)
// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated,
// and only the integer part of the result is returned.


// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
// Example 3:
// Input: x = 9
// Output: 3
// Explanation: The square root of 9 is 3, so we return 3.
const squareRootOfX = (x) => {
    if(x < 2) return x;
    let left = 2;
    let right = Math.floor(x / 2);

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        let num = mid * mid;

        if(num === x) return mid;
        if(num > x) right = mid - 1;
        else left = mid + 1;
    }
    return right;
}

// Time Complexity: O(log n), where n is the input number x. The binary search algorithm divides the search space in half with each iteration, leading to logarithmic time complexity.
// Space Complexity: O(1), as we are using a constant amount of space for variables and not using any additional data structures that grow with input size.

// Test Cases
console.log(squareRootOfX(4));
console.log(squareRootOfX(8));
console.log(squareRootOfX(9));
console.log(squareRootOfX(16));
console.log(squareRootOfX(25));
console.log(squareRootOfX(36));