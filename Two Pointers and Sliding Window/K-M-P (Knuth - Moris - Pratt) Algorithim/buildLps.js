// LPS = longest prefix suffix
//  - Prefix is a substring that starts at the beginning of the string, 
// and suffix is a substring that ends at the end of the string. 
//  - The longest prefix suffix (LPS) array is used to store the length of the longest proper prefix 
// which is also a suffix for each prefix of the pattern.
//  - But LPS is built with proper prefix and proper suffix, 
// which means that the whole string is not considered as a prefix or suffix. For example, 
// in the string "abcab", the longest proper prefix which is also a suffix is "ab", 
// which has a length of 2. The LPS array for this string would be [0, 0, 0, 1, 2].
//  - The LPS array is used in the KMP algorithm to determine how many characters 
// we can skip when a mismatch occurs while searching for a pattern in a text.
// Time Complexity: O(n) where n is the length of the needle

const buildLps = (needle) => {
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
    return lps;
}

// Test Case
console.log(buildLps("onions")); // [ 0, 0, 0, 1, 2, 0 ]
console.log(buildLps("aabaaac")); // [ 0, 1, 0, 1, 2, 2, 0 ]