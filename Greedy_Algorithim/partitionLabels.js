// Leetcode 763. Partition Labels
// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.
// Example 1:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation: The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// Example 2:
// Input: s = "eccbbbbdec"
// Output: [10]
// Explanation: The partition is "eccbbbbdec".

const partitionLabels = (s) => {
    let first = Array(26).fill(-1);
    let last = Array(26).fill(-1);
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;

        if (first[curr] < 0) first[curr] = i;
        last[curr] = i;
    }

    let partitionEnd = (partitionStart = 0);
    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;

        if (partitionEnd < first[curr]) {
            ans.push(partitionEnd - partitionStart + 1);
            partitionEnd = partitionStart = i;
        }

        partitionEnd = Math.max(partitionEnd, last[curr]);
    }

    if (partitionEnd - partitionStart + 1 > 0)
        ans.push(partitionEnd - partitionStart + 1);

    return ans;
};

// Time Complexity: O(n), where n is the length of the input string s. We iterate through the string twice, once to record the first and last occurrences of each character, and once to determine the partitions.
// Space Complexity: O(1), since the size of the first and last arrays is fixed at 26 (the number of lowercase English letters), and the output list ans can have at most 26 elements in the worst case.

// Test cases
console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eccbbbbdec"));
