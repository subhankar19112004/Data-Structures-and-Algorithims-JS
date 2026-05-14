// HackerRank - Tower Breakers
// Two players are playing a game of Tower Breakers! Player 1 always moves first, 
// and both players always play optimally. The rules of the game are as follows:
// - Initially there are n towers.
// - Each tower is of height m.
// - The players move in alternating turns.
// - In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly divides x.
// - If the current player is unable to make a move, they lose the game.
// Given the values of n and m, determine which player will win.
// If the first player wins, return 1. Otherwise, return 2.
// Note: The players will always choose the move that leads to a win if such a move exists.

const towerbreakers = (n, m) => {
    if(m === 1) return 2;
    if(n % 2 === 0) return 2;
    return 1;
}

// Test cases
console.log(towerbreakers(2, 6)); // Output: 2
console.log(towerbreakers(2, 2)); // Output: 2
console.log(towerbreakers(3, 7)); // Output: 1
console.log(towerbreakers(4, 5)); // Output: 2
console.log(towerbreakers(5, 1)); // Output: 2