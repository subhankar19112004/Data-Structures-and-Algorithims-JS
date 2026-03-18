// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
//Appproach-1: We can start from the end of the string and count the characters until we encounter a space. We can ignore any trailing spaces at the end of the string.
const lengthOfLastWord = (s) => {

    let n = s.length - 1;
    while (n >= 0) {
        if (s[n] !== " ") {
            break;
        }
        --n;
    }

    let count = 0;
    while (n >= 0) {
        if (s[n] === " ") {
            break;
        }
        ++count;
        --n;
    }


    return count;
}

//Approach-2: We can also split the string into an array of words and return the length of the last word in the array.
const lengthOfLastWord2 = (s) => {
    let words = s.trim().split(" ");
    return words[words.length - 1].length;
}

//Approach-3: We can also use one while loop to iterate through the string from the end and count the characters until we encounter a space. We can ignore any trailing spaces at the end of the string.
var lengthOfLastWord3 = function (s) {
    let n = s.length - 1;
    let count = 0;
    while (n >= 0) {
        if (s[n] != " ") {
            ++count;
        } else if (count > 0) {
            break;
        }
        --n;
    }
    return count;
};
let s = "Hello World";
console.log(lengthOfLastWord(s));