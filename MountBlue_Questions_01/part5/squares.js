// Hackerrank - Count the Squares
// Given two integers, a and b, find the number of perfect squares between a and b (inclusive).
// Watson likes to challenge Sherlock's math skills. He will provide two integers, a and b, 
// and ask Sherlock to find the number of perfect squares between a and b (inclusive). 
// A perfect square is an integer that is the square of an integer. For example, 1, 4, 9, 16, and 25 are perfect squares.
// Example
// a = 3
// b = 9
// There are two perfect squares between 3 and 9, which are 4 and 9. 
// Return the number of perfect squares, which is 2.



const squares = (a, b) => {
    
    // We use this Math.ceil() function to round up the square root of a to the nearest integer, 
    // which gives us the smallest integer that is greater than or equal to the square root of a. 
    // This is important because we want to include all perfect squares that are greater than or equal to a.
    let start = Math.ceil(Math.sqrt(a));

    // We use the Math.floor() function to round down the square root of b to the nearest integer, 
    // which gives us the largest integer that is less than or equal to the square root of b. 
    // This is important because we want to include all perfect squares that are less than or equal to b.
    let end = Math.floor(Math.sqrt(b));


    // This formula calculates the number of perfect squares between a and b (inclusive) 
    // by taking the difference between end and start and adding 1.
    return end - start + 1;
}

// Test cases
console.log(squares(3, 9)); // Output: 2 (perfect squares are 4 and 9)
console.log(squares(17, 24)); // Output: 0 (no perfect squares between 17 and 24)
console.log(squares(1, 100)); // Output: 10 (perfect squares are 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100)