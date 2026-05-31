// HackerRank - Beautiful Binary String
// ALice has a binary string. She thinks a binary string is beautiful if it doesn't contain the substring "010". 
// In one step, Alice can change a '0' to a '1' or vice versa. Given a binary string, 
// determine the minimum number of steps needed to make the string beautiful.

// Binary String - A string consisting of only '0's and '1's.
// Substring - A contiguous sequence of characters within a string.


const beautifulBinaryString = (b) => {
    let count  = 0;

    for(let i = 0; i < b.length - 2; i++){
        if(b[i] === '0' && b[i + 1] === '1' && b[i + 2] === '0'){
            count++;
            i += 2;
        }
    }
    return count;
}

// Test cases
console.log(beautifulBinaryString('0101010')); // Output: 2
console.log(beautifulBinaryString('01100')); // Output: 0
console.log(beautifulBinaryString('0100101010')); // Output: 3