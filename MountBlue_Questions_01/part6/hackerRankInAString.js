// Hackerrank - HackerRank in a String!
// Given a string, s, and the string "hackerrank", determine if s contains a subsequence of "hackerrank". 
// If it does, return YES on a new line; otherwise, return NO.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// For example, "hacker" is a subsequence of "hhaacckkekraraannk" but not a subsequence of "hackerworld".
// Function to determine if "hackerrank" is a subsequence of the given string s
// The function uses a pointer to track the position in the target string "hackerrank" and iterates through the input string s.
// If a character in s matches the current character in "hackerrank" pointed to by the pointer, the pointer is incremented to check for the next character in "hackerrank".
// After iterating through the string s, if the pointer has reached the length of "hackerrank", it means all characters were found in order, and the function returns "YES". Otherwise, it returns "NO".
// Time complexity: O(n), where n is the length of the input string s, because we may need to iterate through the entire string once.

const hackerRankInAString = (s) => {
    let target = "hackerrank";
    let pointer = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === target[pointer]) {
            pointer++;
        }
        if (pointer === target.length) {
            return "YES";
        }
    }
    // Check if we have found all characters in "hackerrank"
    // If pointer equals the length of target, it means we found all characters in order
    // Return "YES" if all characters were found, otherwise return "NO"

    return "NO";
}

// Test cases
console.log(hackerRankInAString("hereiamstackerrank")); // Output: "YES"
console.log(hackerRankInAString("hackerworld")); // Output: "NO"
console.log(hackerRankInAString("hhaacckkekraraannk")); // Output: "YES"
console.log(hackerRankInAString("hackerank")); // Output: "NO"
console.log(hackerRankInAString("hackerhackerhackerhackerhackerhackerhackerhackerhackerhacker")); // Output: "NO"