/*
Unlucky Days

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.
 */

function unluckyDays(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let d = new Date(year, month, 13);
    if (d.getDay() === 5) {
      count++;
    }
  }
  return count
}