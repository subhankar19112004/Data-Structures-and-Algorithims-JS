// HackerRank - Strong Password
// A password is considered strong if it satisfies the following criteria:
// 1. Its length is at least 6.
// 2. It contains at least one digit.
// 3. It contains at least one lowercase English character.
// 4. It contains at least one uppercase English character.
// 5. It contains at least one special character. The special characters are: !@#$%^&*()-+
// Given a password, find the minimum number of characters to add to make the password strong.
// Note: Here's the set of types of characters in a form you can paste into your solution:
// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strongo
    let hasDigit = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;
    
    const specialChars = "!@#$%^&*()-+";
    
    for(let i = 0; i < n; i++){
        let ch = password[i];
        
        if(ch >= '0' && ch <= '9'){
            hasDigit = true;
        } else if(ch >= 'a' && ch <= 'z'){
            hasLower = true;
        } else if(ch >= 'A' && ch <= 'Z'){
            hasUpper = true;
        } else if(specialChars.includes(ch)){
            hasSpecial = true;
        }
    }
    let missTypes = 0;
    if(!hasDigit)missTypes++;
    if(!hasLower)missTypes++;
    if(!hasUpper)missTypes++;
    if(!hasSpecial)missTypes++;
    
    return Math.max(missTypes, 6 - n);

}

// Test cases
console.log(minimumNumber(3, "Ab1")); // Output: 3
console.log(minimumNumber(11, "#HackerRank")); // Output: 1
console.log(minimumNumber(4, "4700")); // Output: 3
console.log(minimumNumber(6, "Aa1!Gh")); // Output: 0
console.log(minimumNumber(5, "abcde")); // Output: 3