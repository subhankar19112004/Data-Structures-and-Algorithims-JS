// Hackerrank Problem: Fair Rations
// You are the benevolent ruler of Rankhacker Castle, and today you're distributing bread. 
// Your subjects are in a line, and some of them already have some loaves. 
// Times are hard and your castle's food stocks are dwindling, 
// so you must distribute as few loaves as possible according to the following rules:
// 1. Every time you give a loaf of bread to some person , 
// you must also give a loaf of bread to the person immediately in front of or behind them in the line (i.e., persons i + 1 or i - 1).
// 2. After all the bread is distributed, each person must have an even number of loaves.
// Given the number of loaves already held by each citizen, find and print the minimum number of loaves you must distribute to satisfy the two rules above. If this is not possible, print NO.
// The function takes an array of integers as input and returns the minimum number of loaves to distribute to make all numbers even, or "NO" if it's not possible.
// The function iterates through the array and whenever it finds an odd number, it adds 1 to that number and the next number in the array, keeping track of the total loaves distributed.
// The function returns the total number of loaves distributed or "NO" if it's not possible to make all numbers even.
// The function assumes that the input array contains at least one element and that all elements are non-negative integers.

function fairRations(arr) {
  // Write your code here
  let loaves = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
      arr[i] = arr[i] + 1;
      if (!arr[i + 1]) return "NO";
      arr[i + 1] = arr[i + 1] + 1;
      loaves = loaves + 2;
    }
    ++i;
  }
  return loaves;
}

// Test cases
console.log(fairRations([2, 3, 4, 5, 6]));
console.log(fairRations([1, 2, 3]));
