/*
Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.
 */


function getAverage(marks){
    let a = 0;

    marks.forEach(e => a = a + e )
    return Math.round(a / marks.length)
}