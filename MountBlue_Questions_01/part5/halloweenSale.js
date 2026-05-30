// HackerRank - Halloween Sale
// A video game store is having a Halloween Sale. 
// There are a number of games that they want to sell, and they are reducing the price of the games by a fixed 
// amount after each purchase until the price of the game reaches a minimum price. 
// After that, every game will cost the minimum price until the store runs out of games to sell or 
// the customer runs out of money.
// Given the price of the first game, the discount price, the minimum price, and the amount of money you have,
//  determine how many games you can buy.


const halloweenSale = (p, d, m, s) => {
    let price = p;
    let money = s;
    let games = 0;

    while (money >= price) {
        money -= price;
        games++;
        price = Math.max(price - d, m);
    }

    return games;

}

console.log(halloweenSale(20, 3, 6, 80)); // 6
console.log(halloweenSale(20, 3, 6, 85)); // 7  
console.log(halloweenSale(16, 2, 1, 99)); // 35