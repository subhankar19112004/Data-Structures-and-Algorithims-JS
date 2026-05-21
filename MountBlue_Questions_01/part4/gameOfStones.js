// HackerRank - Game of Stones
// Two players are playing a game of stones. Initially, there are n stones in a pile. 
// On each player's turn, they can remove 1, 2, or 3 stones from the pile.
// The player who removes the last stone wins the game. Given the number of stones, n, determine which player will win the game if both players play optimally. 
// The first player is named "First" and the second player is named "Second". 
// Function to determine the winner of the game
// Parameters:
// n: An integer representing the number of stones in the pile.
// Returns:
// A string, either "First" or "Second", indicating the winner of the game.
// The game can be analyzed using a simple pattern based on the number of stones.


function gameOfStones (n){
    if(n % 7 === 0 || n % 7 === 1) return 'Second';
    return 'First';
}

// Test cases
console.log(gameOfStones(1)); // Expected output: 'Second'
console.log(gameOfStones(2)); // Expected output: 'First'
console.log(gameOfStones(3));   // Expected output: 'First'
console.log(gameOfStones(4));   // Expected output: 'First'
console.log(gameOfStones(5));   // Expected output: 'First'
console.log(gameOfStones(6));   // Expected output: 'First'
console.log(gameOfStones(7));   // Expected output: 'Second'
console.log(gameOfStones(8));   // Expected output: 'Second'
console.log(gameOfStones(14));  // Expected output: 'Second'
console.log(gameOfStones(15));  // Expected output: 'Second'