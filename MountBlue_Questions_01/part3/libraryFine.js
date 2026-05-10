// HackerRank - Library Fine
// A library has a fine policy based on how late a book is returned.
// - If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
// - If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos x (the number of days late).
// - If the book is returned after the expected return month but still within the same calendar year as the expected return date, fine = 500 Hackos x (the number of months late).
// - If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.
// Given the actual and expected return dates for a library book, 
// create a program that calculates the fine (if any). 
// The first line contains 3 space-separated integers denoting 
// the respective day, month, and year on which the book was actually returned. 
// The second line contains 3 space-separated integers denoting the respective day, month, and year 
// on which the book was expected to be returned. 
// Print a single integer denoting the library fine for the book received as input.


function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    if(y1 > y2) return 10000;
    if(y1 < y2) return 0;
    
    if(y1 == y2){
        if(m1 > m2){
            return 500 * (m1 - m2);
        } else if(m1 < m2){
            return 0;
        } else {
            if(d1 > d2){
                return 15 * (d1 - d2);
            } else if(d1 == d2 || d1 < d2){
                return 0;
            } 
        }
    }
    return 0;
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(6, 6, 2015, 9, 6, 2015));
console.log(libraryFine(4, 3, 2015, 9, 6, 2015));
console.log(libraryFine(9, 6, 2015, 6, 6, 2014));