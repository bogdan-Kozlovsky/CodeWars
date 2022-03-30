/*
Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
 */


function fakeBin(x){
    let a = x.split("").map(e => +e).map(e => e < 5 ? 0 :  1).join("")
    console.log(a)
    return a
}