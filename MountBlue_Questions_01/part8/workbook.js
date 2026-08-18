// HackerRank Problem: Lisa's Workbook
// Lisa just got a new math workbook. A workbook contains exercise problems, grouped into chapters.
// There are n chapters in Lisa's workbook, numbered from 1 to n. The ith chapter has arr[i] problems,
// numbered from 1 to arr[i]. Each page can hold up to k problems. There are no empty pages or
// unnecessary pages. The only exception is that the last page of a chapter may contain fewer than k problems.
// A problem is special if its index (within a chapter) is the same as the page number where it appears.
// For example, if a problem is the 2nd problem in a chapter and it appears on page 2 of the workbook, it is special.
// Given the details for Lisa's workbook, can you count the number of special problems?
// Function to count the number of special problems in Lisa's workbook
// The function takes the number of chapters, the maximum number of problems per page, and an array of the number of problems in each chapter
// The function returns the count of special problems in the workbook
// The function iterates through each chapter and each problem, keeping track of the current page number
// If a problem's index matches the current page number, it increments the special problem count
// The function returns the total count of special problems after processing all chapters and problems
// The function uses a nested loop to iterate through each chapter and each problem, updating the current page number and checking for special problems
// The function handles the case where the last page of a chapter may contain fewer than k problems by checking if there are any questions left to be placed on the current page
// The function returns the total count of special problems after processing all chapters and problems


function workbook(n, k, arr) {
    let curr_page = 1;
    let specialcount = 0;

    for (let i = 0; i < n; i++) {
        let questionsLeft = k;
        for (let j = 1; j <= arr[i]; j++) {
            if(j === curr_page) ++specialcount;
            --questionsLeft;

            if (questionsLeft === 0 && j < arr[i]) {
                ++curr_page;
                questionsLeft = k;
            }
        }
        ++curr_page;
    }
    return specialcount;
}

// Test cases
console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
