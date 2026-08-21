// Hackerrank Problem: Smart Number
// A smart number is defined as a number that is a perfect square and its square root is an odd integer.
// The function takes an integer n as input and checks if it is a smart number.

const isSmartNumber = (n) => {
    let sqrt = Math.sqrt(n);
    // smart number is that it is a perfect square and its square root is odd.
    // Check if the square root is an integer and if it is odd
    let isPerfectSquare = Number.isInteger(sqrt);

    return isPerfectSquare && (sqrt % 2 === 1);
}

// Test cases
console.log(isSmartNumber(1));
console.log(isSmartNumber(4));
console.log(isSmartNumber(9));