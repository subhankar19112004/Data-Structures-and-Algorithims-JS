// Hackerrank : Taum and B'day
// Step 1: The Real-World Translation (Finding the Loophole)Forget about Taum, Diksha, and HackerRank for a minute. 
// Imagine you are running a retail business.You have a shopping list:You MUST buy $b$ number of Black Shirts.
// You MUST buy $w$ number of White Shirts.You walk into the supplier's warehouse. 
// The supplier gives you a price list:A Black Shirt costs $bc.A White Shirt costs $wc.If this were a normal store, 
// you would just say: "Okay, $b \times bc$ plus $w \times wc$."But there is a twist. 
// Next door, there is a tailor who will dye any shirt the opposite color for exactly $z dollars.
// The Hacker Observation:Because the tailor exists, the price tag on the shirt might be a lie.
// If White Shirts are incredibly cheap, and the dyeing fee ($z$) is also cheap, 
// it might actually save you money to buy nothing but White Shirts, 
// and just pay the tailor to dye some of them black!Step 2: The Core Logic (How to decide)Before we buy anything, 
// we need to determine the True Minimum Cost of each color.How do we get a Black Shirt? 
// We have two choices:The Direct Way: Just buy the black shirt from the supplier for $bc$.
// The Loophole: Buy a white shirt ($wc$) and pay the tailor to dye it black ($z$). 
// Total cost: $wc + z$.Observation: We will always choose the smaller of these two numbers.
// How do we get a White Shirt? We have two choices:The Direct Way: Just buy the white shirt from the supplier for $wc$.
// The Loophole: Buy a black shirt ($bc$) and pay the tailor to dye it white ($z$). Total cost: $bc + z$.
// Observation: We will always choose the smaller of these two numbers.
// Once we figure out the "True" cost for a black shirt and the "True" cost for a white shirt, we simply multiply them by how many shirts we need.
// Step 3: The JavaScript Trap (Why beginners fail this)If you write this logic out in standard JavaScript, 
// it will pass the first 5 test cases and then absolutely fail the rest. Why?Integer Overflow.In HackerRank, 
// they will test your code with massive numbers. Imagine they want $1,000,000,000$ shirts, and each shirt costs $1,000,000,000$.
// If you multiply those in JavaScript, the number becomes so huge that JS loses precision. 
// The standard Number type in JS cannot accurately calculate numbers larger than $9 \times 10^{15}$.To fix this, 
// JavaScript has a special data type called BigInt. Whenever you are dealing with massive money calculations or huge multiplications in JS, 
// you wrap your numbers in BigInt() to tell the engine, "Hey, this number is huge, 
// use extra memory so you don't mess up the math."

function taumBday(b, w, bc, wc, z) {
  // Write your code here
  let B = BigInt(b);
  let BC = BigInt(bc);
  let W = BigInt(w);
  let WC = BigInt(wc);
  let Z = BigInt(z);

  let totalB = BC;
  if (WC + Z < BC) {
    totalB = WC + Z;
  }
  let totalW = WC;
  if (BC + Z < WC) {
    totalW = BC + Z;
  }

  let total = B * totalB + W * totalW;

  return total.toString();
}

// Test cases
console.log(taumBday(10, 10, 1, 1, 1));
console.log(taumBday(5, 9, 2, 3, 1));
console.log(taumBday(6, 10, 3, 4, 2));
