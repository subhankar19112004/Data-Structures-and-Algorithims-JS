// HackerRank - Viral Advertising
// A viral advertising campaign works as follows:
// On the first day, 5 people receive the advertisement.
// Each day, half of the people who received the advertisement like it and 
// each person that likes the advertisement shares it with 3 of their friends on the following day.
// Assuming nobody receives the advertisement more than once, 
// determine how many people have liked the advertisement by a given day, n.
// Function Description
// Complete the viralAdvertising function in the editor below.
// viralAdvertising has the following parameter(s):
// int n: the day number to report
// Returns
// int: the cumulative number of people who have liked the advertisement by day n

const viralAdvertising = (n) => {
    let shared = 5;
    let totalLikes = 0;

    for(let i = 1; i <= n; i++){
        let likes = Math.floor(shared / 2);
        totalLikes += likes;
        shared = likes * 3;
    }
    return totalLikes;
}

// Test cases
console.log(viralAdvertising(3)); // 9
console.log(viralAdvertising(5)); // 24
console.log(viralAdvertising(12)); // 424