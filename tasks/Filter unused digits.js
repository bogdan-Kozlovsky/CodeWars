/*
Filter unused digits

Given a list of integers, return the digits that are not present in any of them.
 */

function unusedDigits(){
    let num = [...arguments].join('')
    let a = ''
    for(let i = 0; i <= 9; i++){
        if(!num.includes(i)) a += i
    }
    return a
}