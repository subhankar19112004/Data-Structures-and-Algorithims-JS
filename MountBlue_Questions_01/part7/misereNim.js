// Hackerrank Problem: Misere Nim
// Two players are playing game of misere nim.
// The basic rules of the game are as follows:
// 1. The game starts with a number of piles of stones, where each pile has a certain number of stones.
// 2. The players take turns removing stones from the piles. On each turn, a player must remove at least one stone from a single pile.
// 3. The player who is forced to take the last stone loses the game.
// Given the initial configuration of the piles, 
// determine which player will win the game if both players play optimally.


const misereNim = (s) => {
    let allOnes = true;
    let totalXor = 0;

    for(let pile of s) {
        totalXor = totalXor ^ pile;
        if(pile !== 1) {
            allOnes = false;
        }
    }

    if(allOnes) {
        return s.length % 2 === 0 ? 'First' : 'Second';
    }
    return totalXor === 0 ? 'Second' : 'First';
}

// Test cases
console.log(misereNim([1, 1, 1]));
console.log(misereNim([1, 1, 2]));
console.log(misereNim([1, 2, 2]));
console.log(misereNim([1, 2, 3]));