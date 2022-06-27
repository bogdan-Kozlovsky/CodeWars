/*

Difference between years. (Level 1)

Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

 */

const howManyYears = (date1, date2) => Math.abs(date1.split('/')[0] - date2.split('/')[0])