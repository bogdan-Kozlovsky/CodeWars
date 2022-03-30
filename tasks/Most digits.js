/*
Most digits

If two numbers in the argument array have the same number of digits, return the first one in the array.


 */

function findLongest(array){
    let b = 0
    let a = array.map(m => m + '').forEach(f => f.length > (b + '').length ? b = +f : null )
}