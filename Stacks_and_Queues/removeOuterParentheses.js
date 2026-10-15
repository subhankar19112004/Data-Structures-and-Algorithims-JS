// Leetcode 1021. Remove Outermost Parentheses
// Given a valid parentheses string s,
// consider its primitive decomposition: s = P_1 + P_2 + ... + P_k,
// where P_i are primitive valid parentheses strings.
// Return s after removing the outermost parentheses of every primitive string in the
// primitive decomposition of s.

// Example 1:
// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:
// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:
// Input: s = "()()"
// Output: ""
// Explanation: The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

//Approach 1: Using Stack
const removeOuterParentheses = (s) => {
    let stack = [];
    let ans = "";

    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            stack.push(s[i]);
            if(stack.length > 1){
                ans = ans + s[i];
            }
        } else {
            if(stack.length > 1){
                ans = ans + s[i]; 
            }
            stack.pop();
        }
    }


    return ans;
}

// Approach 2: Using Count
const removeOuterParentheses2 = (s) => {
    let count = 0;
    let ans = "";

    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            count++;
            if(count > 1){
                ans = ans + s[i];
            }
        } else {
            count--;
            if(count >= 1){
                ans = ans + s[i];
            }
        }
    }

    return ans;
}

// Time Complexity : O(n) where n is the length of the string s, since we are iterating through the string once.
// Space Complexity : O(1) where n is the length of the string s, since we are using a single variable to store the count.

// Test Cases
console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()")); 

console.log(removeOuterParentheses2("(()())(())"));
console.log(removeOuterParentheses2("(()())(())(()(()))"));
console.log(removeOuterParentheses2("()()"));