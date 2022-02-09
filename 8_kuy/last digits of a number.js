/*
last digits of a number

Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
 */

function lastDigit(n, d) {
    let newArr = [];
    if(d <= 0){
        return []
    }
    if(n.toString().length < d){
        return n.toString().split('').map(m => +m)
    }
    let a = n.toString().split('').map(m => +m)
    for(let i = a.length - d; i < a.length; i++ ){
        newArr.push(a[i])
    }
    return newArr
}