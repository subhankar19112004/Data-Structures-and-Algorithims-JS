// HackerRank - Repeated String
// Given a string, s, and an integer, n, find and print the number of letter a's in the first n letters of the infinite string created by repeating s infinitely many times.
// Function Description : Complete the repeatedString function in the editor below.
// repeatedString has the following parameter(s):
// string s: a string to repeat
// int n: the number of characters to consider
// Example : s = 'abcac' and n = 10, the substring we consider is 'abcacabcac', t
// The first 10 characters of the infinite string created by repeating s infinitely many times. There are 4 occurrences of a in the substring.

const repeatedString = (s, n) => {
    let aCount = 0;
    // First counting that in the given string s how many 'a' are there. 
    // We can do this by iterating through the string s and counting the number of 'a'.
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'a'){
            aCount++;
        }
    }
    // We used Math.floor() because we need to find the number of full copies of the string s that can be formed in n characters. 
    // For example, if s = 'aba' and n = 10, then we can form 3 full copies of 'aba' in 10 characters (aba|aba|aba) and we will have 1 character left (a). So we need to use Math.floor() to get the number of full copies.
    let fullCopies = Math.floor(n / s.length);
    // We used % operator to find the remainder of n divided by s.length. 
    // This will give us the number of characters left after forming full copies of s in n characters. For example, if s = 'aba' and n = 10, then we can form 3 full copies of 'aba' in 10 characters (aba|aba|aba) and we will have 1 character left (a). So we need to use % operator to get the number of characters left.
    let remainder = n % s.length;
    // We used totalA to count the total number of 'a' in n characters. 
    // We can calculate this by multiplying the number of full copies of s (fullCopies) with the number of 'a' in s (aCount) and then adding the number of 'a' in the remaining characters (remainder).
    let totalA = fullCopies * aCount;
    
    // We need to count the number of 'a' in the remaining characters (remainder) and add it to totalA. 
    // We can do this by iterating through the first 'remainder' characters of s and counting the number of 'a'.
    for(let i = 0; i < remainder; i++) {
        if(s[i] === 'a') {
            totalA++;
        }
    }
    return totalA;
}

// Test cases
console.log(repeatedString('aba', 10)); // Output: 7
console.log(repeatedString('a', 1000000000000)); // Output: 1000000000000
console.log(repeatedString('abcac', 10)); // Output: 4
