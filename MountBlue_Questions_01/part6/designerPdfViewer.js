// HackerRank - Designer PDF Viewer
// Given a list of 26 heights corresponding to each letter of the alphabet and a word, determine the area of the highlighted rectangle when the word is selected in the PDF viewer. The area is calculated as the width of the rectangle (the number of letters in the word) multiplied by the height of the tallest letter in the word.
// The function designerPdfViewer takes an array h of 26 integers representing the heights of each letter and a string word. It iterates through each character in the word, calculates its corresponding height using its ASCII value, and keeps track of the tallest height found. Finally, it returns the area by multiplying the tallest height by the length of the word.
// Time complexity: O(n), where n is the length of the input string word, because we need to iterate through each character in the word once.
// Function to calculate the area of the highlighted rectangle in the PDF viewer
// The function takes an array of heights and a word, and returns the area of the highlighted rectangle
// The function iterates through each character in the word, calculates its corresponding height, and keeps track of the tallest height found
// Finally, it returns the area by multiplying the tallest height by the length of the word

const designerPdfViewer = (h, word) => {
    let tallest = 0;
    for(let i = 0; i < word.length; i++){
        let hIndex = word.charCodeAt(i) - 'a'.charCodeAt(0);
        let height = h[hIndex];
        if(height > tallest){
            tallest = height;
        }
    }
    return tallest * word.length;
}

// Test cases
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc"));
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"));
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"));
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6], "zaba"));