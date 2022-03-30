/*
Sum of Digits / Digital Root
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 */

let a = 0
function digital_root(n) {
    a = n.toString().split('').map(m => +m).reduce((a,b) => a + b)
    if((a + '').length > 1){
        digital_root(a)
    }
    return a
}