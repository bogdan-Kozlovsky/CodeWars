/*
Minimize Sum Of Array (Array Series #1)

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

 */

function minSum(arr) {
    let a = arr.sort((a , b) => a - b)
    let b = 0
    for(let i = 0 ; i < a.length / 2; i++){
        b += a[i] * a[a.length - (i + 1)]
    }
    return b
}