// HackerRank : Funny String
// In this challenge, you will determine whether a string is funny or not. 
// To determine whether a string is funny, create a copy of the string in reverse e.g. abc cba. 
// Iterating through each string, compare the absolute difference in the ascii values of the characters 
// at positions 0 and 1, 1 and 2 and so on to the end. 
// If the list of absolute differences is the same for both strings, they are funny.
// Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.

const funnyString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let leftAscii1 = s.charCodeAt(left);
    let leftAscii2 = s.charCodeAt(left + 1);
    let leftGap = Math.abs(leftAscii2 - leftAscii1);

    let rightAscii1 = s.charCodeAt(right);
    let rightAscii2 = s.charCodeAt(right - 1);
    let rightGap = Math.abs(rightAscii2 - rightAscii1);

    if (leftGap !== rightGap) return "Not Funny";

    left++;
    right--;
  }
  return "Funny";
};

// Test cases
console.log(funnyString("acxz"));
console.log(funnyString("bcxz"));
console.log(funnyString("abc"));
