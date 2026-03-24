// 1221. Split a String in Balanced Strings
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters. Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.
// Approach-1: We can use two pointers to keep track of the number of 'L' and 'R' characters in the string. We can iterate through the string and increment the count of 'L' and 'R' characters accordingly. Whenever the count of 'L' and 'R' characters are equal, we can increment the count of balanced strings and reset the count of 'L' and 'R' characters to zero.
var balancedStringSplit = function (s){
    let count = 0;
    let R = 0;
    let L = 0;
    for(let i = 0; i < s.length; i++){
        s[i] === 'R' ? R++ : L++;
        if(R === L){
            count++;
            R = L = 0;
        }
    }
    return count;
}

// Approach-2: We can use a single variable to keep track of the difference between the count of 'L' and 'R' characters in the string. We can iterate through the string and increment the variable by 1 for 'L' and decrement it by 1 for 'R'. Whenever the variable is equal to zero, we can increment the count of balanced strings.
var balancedStringSplit1 = function (s){
    let count = 0;
    let temp = 0;
    for(let i = 0; i < s.length; i++){
        s[i] === "R" ? temp++ : temp--;

        temp === 0 ? count++ : null;
    }
    return count;
}

let s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));
console.log(balancedStringSplit1(s));