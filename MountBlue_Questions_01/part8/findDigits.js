// Hackerrank Problem: Find Digits
// Given an integer, count the number of digits in the integer that are divisors of the integer.
// For example, if the input is 12, the digits are 1 and 2. Both 1 and 2 are divisors of 12, so the output is 2.
// If the input is 124, the digits are 1, 2, and 4. All three digits are divisors of 124, so the output is 3.
// If the input is 1024, the digits are 1, 0, 2, and 4. The digit 0 is not a divisor of any number, so we only consider 1, 2, and 4. All three digits are divisors of 1024, so the output is 3.
// If the input is 716, the digits are 7, 1, and 6. Only the digit 1 is a divisor of 716, so the

const findDigits = (s) => {
    let count = 0;
    let strN = s.toString();

    for (let i = 0; i < strN.length; i++) {
        let digit = Number(strN[i]);
        if (digit === 0) continue;

        if (s % digit == 0) ++count;
    }
    return count;
}

// Test cases
console.log(findDigits(12)); // Output: 2
console.log(findDigits(124)); // Output: 3
console.log(findDigits(1024)); // Output: 3
console.log(findDigits(716)); // Output: 1
console.log("--------------------------------------------------")
console.log(parseInt("1024"))
console.log(Number("1024"))