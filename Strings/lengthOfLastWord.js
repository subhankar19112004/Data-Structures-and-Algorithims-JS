// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
//Appproach-1: We can start from the end of the string and count the characters until we encounter a space. We can ignore any trailing spaces at the end of the string.
const lengthOfLastWord = (s) => {

    let n = s.length - 1;
    while(n >= 0 ){
        if(s[n] !== " "){
            break;
        }
        --n;
    }

    let count = 0;
    while( n>=0){
        if(s[n] === " "){
            break;
        }
        ++count;
        --n;
    }


    return count;
}
let s = "Hello World";
console.log(lengthOfLastWord(s));