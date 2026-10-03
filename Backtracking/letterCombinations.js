// Leetcode 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, 
// return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digit to letters (just like on the telephone buttons) is given below (in the diagram). 
// Note that 1 does not map to any letters.
// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:
// Input: digits = ""
// Output: []
// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Diagram of the phone number mapping:
// [2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz"]

var letterCombinations = (digits) => {
    if (!digits.length) return [];
    let result = [];
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    function backtrack(path, index) {
        if(path.length === digits.length) {
            result.push(path.join(""));
            return;
        }
        let choices = map[digits[index]];
        for (let i = 0; i < choices.length; i++) {
            path.push(choices[i]);
            backtrack(path, index + 1);
            path.pop();
        }
    }
    backtrack([], 0);
    return result;
}

// Time Complexity: O(n * 4^n) where n is the length of the input digits.
//  - Each digit can map to at most 4 letters (like 7 and 9), and we explore all combinations.
// Space Complexity: O(n) for the recursion stack and the path array, where n is the length of the input digits.

// Test cases
console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));