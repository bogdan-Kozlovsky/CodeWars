/*
Is n divisible by (...)?

Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)
 */

function isDivisible(){
    let arr = [...arguments]
    let a = true
    for(let i = 1; i < arr.length; i++){
        arr[0] % arr[i] === 0 ? true : a = false
    }
    return a
}