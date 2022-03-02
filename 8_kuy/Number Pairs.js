/*
Number Pairs

In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.
 */

const getLargerNumbers = (a, b) =>  {
    let newArr = []
    for(let i = 0; i < a.length; i++){
        a[i] >= b[i] ? newArr.push(a[i]) : newArr.push(b[i])
    }
    return newArr
}