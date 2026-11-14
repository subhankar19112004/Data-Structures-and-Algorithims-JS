// Fibonacci sequence using recursion
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
// The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// In this implementation, we define a recursive function `fib` that takes an integer `n` as input and returns the nth Fibonacci number.
// The base case for the recursion is when n is 0 or 1, in which case the function returns n itself. For other values of n, the function calls itself recursively to calculate the sum of the two preceding Fibonacci numbers.
// The time complexity of this recursive implementation is O(2^n), which can be inefficient for large values of n due to repeated calculations. However, it serves as a clear example of recursion in action.


// Example usage:
// fib(6) will return 8
// Explanation: The Fibonacci sequence up to the 6th number is: 0, 1, 1, 2, 3, 5, 8. Therefore, fib(6) returns 8.

// Recursive function to calculate the nth Fibonacci number
function fib(n) {
    if( n <= 1){
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));