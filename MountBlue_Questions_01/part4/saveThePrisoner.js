// HackerRank - Save the Prisoner
// A jail has a number of prisoners and a number of sweets. 
// The sweets are to be distributed to the prisoners sequentially,
// starting with a given prisoner. The distribution proceeds around the circle of prisoners 
// (which is to say, after the last prisoner, the distribution starts again with the first prisoner) 
// until all sweets are distributed. The last sweet is poisoned. Find the number of the prisoner 
// who receives the poisoned sweet.
// Example
// n = 4
// m = 6
// s = 2
// The prisoners are numbered from 1 to 4. Prisoner 2 gets sweets 1 and 5, 
// prisoner 3 gets sweets 2 and 6, prisoner 4 gets sweet 3, and prisoner 1 gets sweet 4. 
// The last sweet (number 6) is poisoned, so the answer is 3.
// Function Description
// Complete the saveThePrisoner function in the editor below. 
// It should return an integer representing the number of the prisoner who receives the poisoned sweet.
// saveThePrisoner has the following parameter(s):
// n: an integer, the number of prisoners
// m: an integer, the number of sweets
// s: an integer, the starting prisoner number

function saveThePrisoner(n, m, s) {
    // Write your code here
    return ((s - 1) + (m - 1)) % n + 1;
}