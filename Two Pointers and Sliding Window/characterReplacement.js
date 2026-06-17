// Leetcode 424. Longest Repeating Character Replacement
// You are given a string s and an integer k.
// You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.
// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

const characterReplacement = (s, k) => {
    let i = j = 0;
    let map = new Array(26).fill(0);
    map[s.charCodeAt(0) - 65] = 1;
    let max = 0;
    
    while (j < s.length) {
        if (isValid(map, k)) {
            max = Math.max(max, j - i + 1);
            ++j;
            ++map[s.charCodeAt(j) - 65];
        } else {
            --map[s.charCodeAt(i) - 65];
            ++i;
        }
    }
    return max;
}

var isValid = function (map, k) {
    let totalCount = 0;
    let maxCount = 0;
    for (let i = 0; i < 26; i++) {
        totalCount += map[i];
        maxCount = Math.max(maxCount, map[i]);
    }
    return totalCount - maxCount <= k;
}

// Test cases
console.log(characterReplacement("AABEAFAABEAFA", 2));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("AABABBA", 2));
console.log(characterReplacement("AABABBA", 3));
console.log(characterReplacement("AABABBA", 4));