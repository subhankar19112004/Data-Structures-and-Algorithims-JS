// HackerRank - Day of the Programmer
// The Day of the Programmer is the 256th day of the year in the Julian and Gregorian calendars. 
// During the 1918 calendar transition from the Julian to the Gregorian calendar, 
// the day after January 31st was February 14th. 
// This means that in the year 1918, February 14th was the 32nd day of the year in Russia.
// Given a year, find the date of the 256th day of that year according to the official Russian calendar during that year. 
// The format of the returned date should be dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is the four-digit year.
// Note: Julian calendar was used in Russia until 1917, and the Gregorian calendar was used from 1919 onwards.


const dayofProgrammer = (year) => {

    if(year === 1918){
        return `26.09.${year}`;
    }

    let isLeap = false;

    if(year < 1918){
        if(year % 4 === 0){
            isLeap = true;
        }
    } else {
        if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
            isLeap = true;
        }
    }

    if(isLeap){
        return `12.09.${year}`;
    }

    return `13.09.${year}`;
}

// Test cases
console.log(dayofProgrammer(2017)); // Output: "13.09.2017"
console.log(dayofProgrammer(2016)); // Output: "12.09.2016"
console.log(dayofProgrammer(1800)); // Output: "12.09.1800"
console.log(dayofProgrammer(1918)); // Output: "26.09.1918"
console.log(dayofProgrammer(2000)); // Output: "12.09.2000"