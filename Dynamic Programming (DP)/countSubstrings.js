// Leetcode 647. Palindromic Substrings
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Example 3:
// Input: s = "racecar"
// Output: 10
// Explanation: Ten palindromic strings: "r", "a", "c", "e", "c", "a", "r", "cec", "aceca", "racecar".

// Constraints:
// 1 <= s.length <= 1000
// s consists of lowercase English letters.

let s = "abc";
let s1 = "aaa";
let s2 = "racecar";

var countSubstrings = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(null));
    let ans = 0;

    // Creating base case of 1 - length and 2 - length substrings
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        ++ans;
        if (i < n && s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            ++ans;
        }
    }

    // Finding the rest of length (3 .. n);
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + (len - 1);
            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                ++ans;
            }
        }
    }
    return ans;
};

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

// Test Cases
console.log(countSubstrings(s));
console.log(countSubstrings(s1));
console.log(countSubstrings(s2));