// HackerRank : Chocolate Feast
// Little Bobby loves chocolate. He frequently goes to his favorite store, which sells chocolate bars.
// Each bar costs c dollars. He has n dollars to spend, and he can turn in m wrappers to receive one free bar.
// How many bars can Bobby eat?
// Example
// n = 10, c = 2, m = 5
// He can buy 5 bars of chocolate for 10 dollars. He then turns in 5 wrappers to receive 1 additional bar.
// Now he has 1 wrapper. He cannot turn in his single wrapper for an additional bar, so his total is 6 bars.


const chocolateFeast = (n, c, m) => {
    let totalBars = Math.floor(n / c);
    let wrappers = totalBars;;

    while (wrappers >= m) {
        
        let freeChocolates = Math.floor(wrappers / m);
        totalBars += freeChocolates;

        wrappers = freeChocolates + (wrappers % m);
    }
    return totalBars;
}

// Test cases
console.log(chocolateFeast(10, 2, 5)); // Output: 6
console.log(chocolateFeast(12, 4, 4)); // Output: 3
console.log(chocolateFeast(6, 2, 2)); // Output: 5
console.log(chocolateFeast(15, 3, 2)); // Output: 9