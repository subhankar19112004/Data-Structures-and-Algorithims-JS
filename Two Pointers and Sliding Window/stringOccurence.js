// Leetcode: 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Explanation : "ll" occurs at index 2 in "hello".
// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Explanation : "bba" does not occur in "aaaaa", so we return -1.

// Approach 1: Using slice method to check each substring of the haystack with the needle. Time complexity is O(n * m) where n is the length of haystack and m is the length of needle.
const stringOccurence = (arr, needle) => {
    let n = arr.length;
    let s = needle.length;

    for(let i = 0; i <= n - s; i++) {
        let element = arr.slice(i, i + s);

        if(element === needle) {
            return i;
        }
    }
    return -1;
}



// Same Test cases for both

console.log("Using first approach");
console.log(stringOccurence("hello world", "world")); // 6
console.log(stringOccurence("hello world", "hello")); // 0
console.log(stringOccurence("hello world", "o w")); // 4
console.log(stringOccurence("hello world", "abc")); // -1


