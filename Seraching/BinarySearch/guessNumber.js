// Leetcode : 374. Guess Number Higher or Lower
// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I'll tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns three possible results:
// -1 : My number is lower
// 1 : My number is higher
// 0 : Congrats! You got it!
// Example:
// Input: n = 10, pick = 6
// Output: 6

// Guess API
function guess(num) {
    // This is a mock implementation of the guess API for testing purposes.
    // In a real scenario, this function would be provided and would return:
    // -1 if the guessed number is higher than the target number,
    // 1 if the guessed number is lower than the target number,
    // and 0 if the guessed number is correct.
    const target = 42; // Example target number for testing
    if (num === target) {
        return 0;
    } else if (num < target) {
        return -1;
    } else {
        return 1;
    }
}

// Binary Search

function guessNumber(n) {
    let left = 1;
    let right = n;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        let res = guess(mid);

        if(res == 0){
            return mid;
        } else if(res == -1){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}