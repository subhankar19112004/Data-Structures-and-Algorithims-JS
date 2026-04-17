// 1021. Remove Outermost Parentheses
// Given a valid parentheses string s, 
// consider its primitive decomposition: s = P_1 + P_2 + ... + P_k, 
// where P_i are primitive valid parentheses strings.
// Return s after removing the outermost parentheses of every primitive string in the 
// primitive decomposition of s.

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

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()")); 