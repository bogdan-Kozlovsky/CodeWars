/*
Reverse a Number

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
 */

function reverseNumber(n) {
    let a = n.toString().split('').reverse()
    if(a[a.length - 1] === '-'){
        a.pop() && a.unshift('-')
    }
    return +a.join('')
}