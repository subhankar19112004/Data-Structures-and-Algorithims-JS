// Leetcode 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// A string is a palindrome when it reads the same backward as forward.

// Palindromic substring is a contiguous sequence of characters within a string.
// - We solved this previously and and it is leetcode 647. Palindromic Substrings.
// In that problem we counted the number of palindromic substrings in a given string.
// In this problem we need to find the longest palindromic substring in a given string.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"
// Explanation: "bb" is the longest palindromic substring in the given string.

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

let s = "babad";
let s1 = "cbbd";
let s2 = "a";

var longestPalindrome = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(null));
    let ans = [0, 0];

    // Base case
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        if (i < n && s[i] == s[i + 1]) {
            dp[i][i + 1] = true;
            ans = [i, i + 1];
        }
    }

    // 3 ... n
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + (len - 1);
            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                ans = [i, j]
            }
        }
    }
    return s.substring(ans[0], 1 + ans[1]);
};

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

// test cases
console.log(longestPalindrome(s));
console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));