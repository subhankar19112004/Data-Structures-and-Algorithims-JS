// HackerRank - Drawing Book
// A teacher asks the class to open their books to a page number. 
// A student can either start turning pages from the front of the book or from the back of the book. 
// They always turn pages one at a time. When they open the book, page 1 is always on the right side:
// When they flip page 1, they see pages 2 and 3. 
// Each page except the last page will always be printed on both sides.
// The last page may only be printed on the front, given the length of the book. 
// If the book is n pages long and a student wants to turn to page p, 
// what is the minimum number of pages to turn? 
// They can start at the beginning or the end of the book.
// Example
// n = 5
// p = 4
// Using the diagram above, if the student wants to turn to page 4, 
// they can either start at page 1 and turn 2 pages or start at page 5 and turn 1 page. 
// Return the minimum number of pages that must be turned, which is 1.

const pageCount = (n, p) => {
    let front = Math.floor(p / 2);
    let back = Math.floor(n / 2) - front;

    return Math.min(front, back);
}

// Test cases
console.log(pageCount(5, 4)); // Output: 0
console.log(pageCount(6, 2)); // Output: 1
console.log(pageCount(7, 3)); // Output: 1
console.log(pageCount(10, 5)); // Output: 0
console.log(pageCount(10, 6)); // Output: 1