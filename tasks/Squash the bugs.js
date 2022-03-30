/*
Squash the bugs

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
 */

function findLongest(str) {
    let a = str.split(' ')
    let b = 0
    for(let i = 0; i < a.length; i++){
        if(a[i].length > b){
            b = a[i].length
        }
    }
    return b
}