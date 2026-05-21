// HackerRank - Cat and Mouse
// Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
// Your task is to determine which cat will reach the mouse first, 
// assuming the mouse does not move and the cats travel at equal speed. 
// If the cats arrive at the same time, 
// the mouse will be allowed to move and it will escape while they fight.
// You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. Complete the function cat AndMouse to return the appropriate answer to each query, which will be printed on a new line.
// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

function catAndMouse(x, y, z) {
    let catADistance = Math.abs(x - z);
    let catBDistance = Math.abs(y - z);

    if (catADistance < catBDistance) {
        return "Cat A";
    } else if (catBDistance < catADistance) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

// Test cases
console.log(catAndMouse(1, 2, 3)); // Expected output: "Cat B"
console.log(catAndMouse(1, 3, 2)); // Expected output: "Mouse C"
console.log(catAndMouse(2, 1, 3)); // Expected output: "Cat A"
console.log(catAndMouse(2, 3, 1)); // Expected output: "Cat A"
console.log(catAndMouse(3, 1, 2)); // Expected output: "Mouse C"