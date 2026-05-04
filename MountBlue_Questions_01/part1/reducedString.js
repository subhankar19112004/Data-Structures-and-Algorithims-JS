// HackerRank - Reduced String
// Given a string, reduce it by removing pairs of adjacent characters that are the same. 
// Continue doing this until no more pairs can be removed. If the final string is empty, return "Empty String".

const reducedString = (s) => {

    let stack = [];
    for(let i = 0; i < s.length; i++){
        let ch = s[i];

        if(stack.length && stack[stack.length - 1] === ch){
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    let result = stack.join("");
    return result === "" ? "Empty String" : result;
}

//Example usage:
console.log(reducedString("aaabccddd")); // Output: "abd"
console.log(reducedString("aa")); // Output: "Empty String"
console.log(reducedString("baab")); // Output: "Empty String"