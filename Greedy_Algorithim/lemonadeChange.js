// Leetcode 860. Lemonade Change
// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you,
// and order one at a time (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
// You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
// Note that you do not have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.

// Example 1:
// Input: [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:
// Input: [5,5,10]
// Output: true
// Explanation:
// From the first 2 customers in order, we collect two $5 bills.
// For the third customer, we collect a $10 bill and give back a $5.
// Since all customers got correct change, we output true.


function lemonadeChange(bills) {
  let wallet = [0, 0]; // wallet[0] for $5 bills, wallet[1] for $10 bills
  for (let i = 0; i < bills.length; ++i) {
    if (bills[i] === 5) {
      ++wallet[0];
    } else if (bills[i] === 10) {
      ++wallet[1];
      --wallet[0];
    } else {
      if (wallet[1] >= 1 && wallet[0] >= 1) {
        --wallet[1];
        --wallet[0];
      } else {
        wallet[0] -= 3;
      }
    }
    if (wallet[0] < 0) return false;
  }
  return true;
}

// Test cases
console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10]));
console.log(lemonadeChange([10, 10, 10]));