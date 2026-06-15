// Leetcode Problem: 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
    let i = j = 0;
    let map = {};
    let maxWs = 0;
    let currWs = 0;

    for(j = 0; j < s.length; j++) {
        if(map[s[j]] !== undefined && map[s[j]] >= i) {
            i = map[s[j]] + 1;
        }
        map[s[j]] = j;
        currWs = j - i + 1;
        maxWs = Math.max(maxWs, currWs);
    }
    return maxWs;
}

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));