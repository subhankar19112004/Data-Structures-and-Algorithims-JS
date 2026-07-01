// Hackerrank Problem: Sum vs XOR
// Given a number n, find the number of values of x such that 0 <= x <= n and n + x = n ^ x.
// The solution is based on the observation that for n + x to equal n ^ x, there must be no carry in any bit position when adding n and x. This means that for every bit position where n has a 1, x must have a 0, and for every bit position where n has a 0, x can have either a 0 or a 1. Therefore, the number of valid x values is equal to 2 raised to the number of zero bits in n.
// The function sumVsXor takes an integer n as input and returns the number of valid x values as a BigInt.
// example: For n = 5 (binary 101), there are two zero bits (at positions 1 and 3), so the number of valid x values is 2^2 = 4. The valid x values are 0, 1, 4, and 5.
// The function handles the case when n is 0 separately, returning 1 since the only valid x value is 0 itself.


const sumVsXor = (n) => {
  n = BigInt(n);
  if (n == 0n) return 1n;
  let zeroBits = 0n;
  while (n > 0n) {
    if ((n & 1n) == 0n) {
      zeroBits++;
    }
    n >>= 1n; // Equivalent to n = n >>= 1
  }
  return 2n ** zeroBits;
};


// Test cases
console.log(sumVsXor(5));
console.log(sumVsXor(10));
console.log(sumVsXor(0));
