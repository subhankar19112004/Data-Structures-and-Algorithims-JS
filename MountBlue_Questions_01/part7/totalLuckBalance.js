// HackerRank - Luck Balance
// You are given a number of contests. Each contest has a luck balance and an importance rating.
// Your goal is to maximize your luck balance by losing important contests and winning unimportant contests. However, you can only lose a certain number of important contests.
// Function to calculate the maximum luck balance
// Lena is preparing for an important coding competition that is preceded by a number of sequential contests.
// Each contest is described by two integers, the first is the amount of luck associated with the contest and the second is its importance rating. The importance rating is 1 if the contest is important and 0 if it is unimportant.
// If Lena loses an important contest, her luck balance will decrease by the amount of luck associated with that contest. If she wins an important contest, her luck balance will increase by the amount of luck associated with that contest. If she loses an unimportant contest, her luck balance will increase by the amount of luck associated with that contest. If she wins an unimportant contest, her luck balance will decrease by the amount of luck associated with that contest.
// Given the number of important contests Lena can lose and a 2D array of contests, determine the maximum amount of luck Lena can have after competing in all the contests.
// L[i] is the amount of luck associated with the contest and T[i] is its importance rating. The first line contains two space-separated integers n and k, the number of contests and the number of important contests Lena can lose. Each of the next n lines contains two space-separated integers, L[i] and T[i], the amount of luck associated with the contest and its importance rating.

const totalLuckBalance = (k, contests) => {
    let luckBalance = 0;
    let importantContests = [];

    for(let i = 0; i < contests.length; i++) {
        let luck = contests[i][0];
        let importance = contests[i][1];

        if(importance === 0) {
            luckBalance += luck;
        } else {
            importantContests.push(luck);
        }
    }

    importantContests.sort((a, b) => b - a);

    for(let i = 0; i < importantContests.length; i++) {
        if(i < k) {
            luckBalance += importantContests[i];
        } else {
            luckBalance -= importantContests[i];
        }
    }
    return luckBalance;
}

// Test case
const k = 2;
const contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];

const result = totalLuckBalance(k, contests);
console.log(result); // Output: 25

// 8 + 5 + 10 + 5 - 1 - 2 = 25