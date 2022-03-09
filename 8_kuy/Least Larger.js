/*
Least Larger

Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.
 */

function leastLarger(a , i) {
    let arr = a.filter(f => f > a[i]).sort((a , b ) => a - b)
    return arr[0] > a[i] ? a.indexOf(arr[0]) : -1
}