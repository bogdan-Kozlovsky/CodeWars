/*
Age in days

Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then
 */

function ageInDays(year, month, day){
    const birthday = new Date().getTime();
    const date = new Date(year,month-1,day).getTime()
    const days = Math.floor(Math.abs(birthday-date) / (1000 * 3600 * 24))
    return `You are ${days} days old`
}