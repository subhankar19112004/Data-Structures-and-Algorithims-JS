// Leetcode 131. Palindrome Partitioning
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// A palindrome string is a string that reads the same backward as forward.
// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:
// Input: s = "a"
// Output: [["a"]]

var partition = (s) => {
    let result = [];

    function isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        
        while (i < j) {
            if (s[i++] !== s[j--]) return false;
        }
        return true;
    }

    function backtrack(path, remainingString) {
        if (!remainingString.length) {
            result.push([...path]);
            return;
        }

        for (let i = 1; i <= remainingString.length; i++) {
            let choice = remainingString.substring(0, i);
            
            if (!isPalindrome(choice)) continue;
            
            path.push(choice);
            backtrack(path, remainingString.substring(i));
            path.pop();
        }
    }

    backtrack([], s);
    return result;
}

// Time Complexity: O(n * 2^n) where n is the length of the input string.
//  - We generate all possible partitions, and for each partition, we check if the substring is a palindrome which takes O(n) time.
// Space Complexity: O(n) for the recursion stack and the path array, where n is the length of the input string.

// Test cases
console.log(partition("aab"));
console.log(partition("a"));