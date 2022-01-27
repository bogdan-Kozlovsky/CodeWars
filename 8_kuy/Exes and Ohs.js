/*
Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 */

function XO(str) {
    let a = str.toLowerCase().split('')
    let b = 0
    let c = 0
    for(let i = 0; i < a.length; i++){
        if(a[i] === "x"){
            b += 1
        }
        if(a[i] === "o"){
            c += 1
        }

    }
    return b === c
}