// leetcode : 20, Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

//Approach 1: by hardcoding all the brackets

var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '{' || s[i] === '[' || s[i] === '('){
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if(!top || (top == '{' && s[i] !== '}') || (top == '[' && s[i] !== ']') || 
            (top == '(' && s[i] !== ')')){
                return false;
            }
        }
    }
    return stack.length === 0;
};

// Approach 2: by using a map to store the brackets

var isValid = function(s) {
    let stack = [];
    let map = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if(!top || s[i] !== map[top]){
                return false;
            }
        }
    }
    return stack.length === 0;
};