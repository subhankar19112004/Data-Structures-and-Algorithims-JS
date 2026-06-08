// KMP (Knuth - Moris - Pratt) Algorithm for String Search
// The KMP algorithm is an efficient string searching algorithm that uses the concept of longest prefix-suffix (LPS) to avoid unnecessary comparisons. 
// It preprocesses the pattern (needle) to create an LPS array, which helps in determining how many characters can be skipped when a mismatch occurs during the search in the text (haystack).
// Time Complexity: O(n + m) where n is the length of the haystack and m is the length of the needle
// Space Complexity: O(m) for the LPS array
// The KMP algorithm consists of two main steps:
// 1. Build the LPS array for the needle.
// 2. Use the LPS array to search for the needle in the haystack.
// The LPS array is built by iterating through the needle and comparing characters. 
// If a match is found, the length of the longest prefix-suffix is updated. If a mismatch occurs, the algorithm uses the LPS array to determine how many characters can be skipped, thus avoiding redundant comparisons.
// Example:
// For the needle "abcab", the LPS array would be [0, 0, 0, 1, 2]. This means that for the prefix "a", 
// there is no proper prefix-suffix, for "ab" there is no proper prefix-suffix, for "abc" there is no proper prefix-suffix, for "abca" the longest proper prefix-suffix is "a" (length 1), and for "abcab" the longest proper prefix-suffix is "ab" (length 2). This information allows the KMP algorithm to efficiently search for the needle in the haystack.
// The KMP algorithm is particularly useful for searching for patterns in large texts, as it significantly reduces the number of comparisons needed compared to naive string searching algorithms.

const stringSearchAlgorithim = (haystack, needle) => {
    // Build the LPS array for the needle
    let lps = [0];
    let i = 0;
    let j = 1;

    while (j < needle.length) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1;
            i++;
            j++;
        } else {
            if (i === 0) {
                lps[j] = 0;
                j++;
            } else {
                i = lps[i - 1];
            }
        }
    }

    // Search for the needle in the haystack using the LPS array
    i = j = 0;
    while(i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            if (j === 0) {
                i++;
            } else {
                j = lps[j - 1];
            }
        }
        if (j === needle.length) {
            return i - needle.length;
        }
    }
    return -1;
}

// Test Cases
console.log(stringSearchAlgorithim("hello", "ll")); // 2
console.log(stringSearchAlgorithim("aaaaa", "bba")); // -1
console.log(stringSearchAlgorithim("onionionsky", "onions")); // 3