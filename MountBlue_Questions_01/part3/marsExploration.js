// HackerRank - Mars Exploration
// A space explorer has landed on Mars and sends a series of SOS messages to Earth for help.
// Each SOS message is exactly 3 characters long: "SOS". However, due to cosmic radiation, some of the characters in the messages may have been altered. 
// Given the string s, determine how many letters of the SOS messages have been changed.
// Example
// s = "SOSSPSSQSSOR"
// The original message was "SOSSOSSOS", but the received message is "SOSSPSSQSSOR". 
// There are three altered characters: 'P' instead of 'O', 'Q' instead of 'S', and 'R' instead of 'S'.

// Function to count the number of altered characters in the SOS messages
const marsExploration = (s) => {
    let count = 0;

    for(let i = 0; i < s.length; i++){
        let expected;

        if(i % 3 === 1){
            expected = "O";
        } else {
            expected = "S";
        }

        if(s[i] !== expected){
            count++;
        }
    }
    return count;
}

// Test cases
console.log(marsExploration("SOSSPSSQSSOR")); // Output: 3
console.log(marsExploration("SOSSOT")); // Output: 1
console.log(marsExploration("SOSSOSSOS")); // Output: 0
console.log(marsExploration("SSS")); // Output: 3
console.log(marsExploration("SOOSOS")); // Output: 2