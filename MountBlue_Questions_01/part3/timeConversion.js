// HackerRank - Time Conversion
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. - 12:00:00PM on a 
// 12-hour clock is 12:00:00 on a 24-hour clock.
// Example
// s = '12:01:00PM'
// Return '12:01:00'.

function timeConversion(s) {
    // Write your code here
    let hour = parseInt(s.slice(0, 2));
    let period = s.slice(8);
    let rest = s.slice(2, 8);
    
    if(period == "AM"){
        if(hour == 12){
            hour = 0;
        }
    } else {
        if(hour !== 12)hour = hour + 12;
    }
    let finalHour = hour.toString().padStart(2, "0");
    
    return finalHour + rest;

}

// Test cases
console.log(timeConversion("07:05:45PM")); // Output: "19:05:45"
console.log(timeConversion("12:00:00AM")); // Output: "00:00:00"
console.log(timeConversion("12:00:00PM")); // Output: "12:00:00"